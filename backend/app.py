import os

from flask import Flask
from dotenv import load_dotenv
from propelauth_flask import init_auth, current_user, current_org

load_dotenv()

app = Flask(__name__)
auth = init_auth(os.getenv("PROPELAUTH_AUTH_URL"), os.getenv("PROPELAUTH_API_KEY"))

@app.route("/whoami")
@auth.require_user
def who_am_i():
    print(f"User ID: {current_user.user_id}")
    """This route is protected by require_user"""
    return {"user_id": current_user.user_id}