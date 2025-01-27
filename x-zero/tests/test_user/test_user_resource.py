from webtest import TestApp
from ..common_config import DEFAULT_USER_PASSWORD


class TestUserResource:

    def test_user_get_200(self, logged_in_user, testapp: TestApp):
        """get user by id successful."""
        res = testapp.get(f"/api/v1/user/{logged_in_user.id}")
        assert res.status_code == 200
        u = res.json["user"]
        assert u["id"] == logged_in_user.id
        assert u["username"] ==  logged_in_user.username
        assert u["email"] == logged_in_user.email

