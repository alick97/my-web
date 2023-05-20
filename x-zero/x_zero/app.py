# -*- coding: utf-8 -*-
"""The app module, containing the app factory function."""
import logging
import sys

from flask import Flask, render_template, jsonify

from x_zero import commands, public, user
from x_zero.authenticate.resource import AuthResource
from x_zero.authenticate.exception import AuthError
from x_zero.extensions import (
    bcrypt,
    cache,
    db,
    debug_toolbar,
    flask_static_digest,
    login_manager,
    migrate,
    restful_api,
    ma,
)


def create_app(config_object="x_zero.settings"):
    """Create application factory, as explained here: http://flask.pocoo.org/docs/patterns/appfactories/.

    :param config_object: The configuration object to use.
    """
    app = Flask(__name__.split(".")[0])
    app.config.from_object(config_object)
    register_extensions(app)
    register_blueprints(app)
    register_errorhandlers(app)
    register_shellcontext(app)
    register_commands(app)
    register_marshallow(app)
    register_restful_api(app)
    configure_logger(app)
    return app


def register_extensions(app):
    """Register Flask extensions."""
    bcrypt.init_app(app)
    cache.init_app(app)
    db.init_app(app)
    login_manager.init_app(app)
    debug_toolbar.init_app(app)
    migrate.init_app(app, db)
    flask_static_digest.init_app(app)
    restful_api.init_app(app)
    app.config["WTF_CSRF_ENABLED"] = False
    return None


def register_blueprints(app):
    """Register Flask blueprints."""
    app.register_blueprint(public.views.blueprint)
    app.register_blueprint(user.views.blueprint)
    return None


def register_errorhandlers(app):
    """Register error handlers."""

    def render_error(error):
        """Render error template."""
        # If a HTTPException, pull the `code` attribute; default to 500
        error_code = getattr(error, "code", 500)
        return render_template(f"{error_code}.html"), error_code

    for errcode in [401, 404, 500]:
        app.errorhandler(errcode)(render_error)
    
    def _handler_auth_error(error):
        return jsonify({"message": str(error)}), 401

    app.errorhandler(AuthError)(_handler_auth_error)
    return None


def register_shellcontext(app):
    """Register shell context objects."""

    def shell_context():
        """Shell context objects."""
        return {"db": db, "User": user.models.User}

    app.shell_context_processor(shell_context)


def register_commands(app):
    """Register Click commands."""
    app.cli.add_command(commands.test)
    app.cli.add_command(commands.lint)


def register_marshallow(app):
    """Register marshallow"""
    ma.init_app(app)

def register_restful_api(app):
    """Register restful api"""
    # route
    restful_api.add_resource(AuthResource, "/api/v1/auth/login")
    restful_api.init_app(app)

def configure_logger(app):
    """Configure loggers."""
    handler = logging.StreamHandler(sys.stdout)
    if not app.logger.handlers:
        app.logger.addHandler(handler)
