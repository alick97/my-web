from flask import url_for

from x_zero.user.models import User

from ..factories import UserFactory
from ..common_config import DEFAULT_USER_PASSWORD

from webtest import TestApp


class TestLogIn:
    """Login."""

    def test_can_log_in_returns_200(self, user, testapp: TestApp):
        """Login successful."""
        # Goes to homepage
        params = {
            "username": user.username,
            "password": DEFAULT_USER_PASSWORD
        }
        res = testapp.post_json("/api/v1/auth/login", params=params)
        assert res.status_code == 200

    def test_can_not_log_in_password_wrong_returns_401(self, user, testapp: TestApp):
        params = {
            "username": user.username,
            "password": DEFAULT_USER_PASSWORD + "-wrong"
        }
        res = testapp.post_json("/api/v1/auth/login", params=params, expect_errors=True)
        assert res.status_code == 401
