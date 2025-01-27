# -*- coding: utf-8 -*-
"""Defines fixtures available to all tests."""

import logging

import pytest
from webtest import TestApp

from x_zero.app import create_app
from x_zero.database import db as _db

from .factories import UserFactory
from .common_config import DEFAULT_USER_PASSWORD


@pytest.fixture
def app():
    """Create application for the tests."""
    _app = create_app("tests.settings")
    _app.logger.setLevel(logging.CRITICAL)
    ctx = _app.test_request_context()
    ctx.push()

    yield _app

    ctx.pop()


@pytest.fixture
def testapp(app):
    """Create Webtest app."""
    return TestApp(app)


@pytest.fixture
def db(app):
    """Create database for the tests."""
    _db.app = app
    with app.app_context():
        _db.create_all()

    yield _db

    # Explicitly close DB connection
    _db.session.close()
    _db.drop_all()


@pytest.fixture
def user(db):
    """Create user for the tests."""
    user = UserFactory(password=DEFAULT_USER_PASSWORD)
    db.session.commit()
    return user

@pytest.fixture
def logged_in_user(db, testapp):
    """Create user for the tests."""
    user = UserFactory(password=DEFAULT_USER_PASSWORD)
    db.session.commit()
    
    params = {
        "username": user.username,
        "password": DEFAULT_USER_PASSWORD
    }
    testapp.post_json("/api/v1/auth/login", params=params)
    return user