# Chatrooms

## Installation

### Backend

Create virtual environment.

    python3 -m venv venv

Activate virtual environment. You need to activate virtual environment before running any Django command. For example, any command starting with manage.py is a Django command.

    source venv/bin/activate

Install dependencies in virtual environment. You will have to run this command whenever you pull new changes from the server.

    pip install -r requirements.txt

Run the migrations. You will have to run this command whenever you pull new changes from the server.

    ./manage.py migrate

You can run the following Django command to generate test data.

    ./manage.py generate

To regenerate test data.

    ./manage.py flush
    ./manage.py generate

Run the backend.

    ./manage.py runserver

Visit localhost:8000 to view the landing page.

### Frontend

The React app exists in frontend directory.

Install Node modules.

    cd frontend
    npm install


Start the development server.

    npm run start


The frontend app will be visible at http://localhost:3000/.

## Setup pre-commit

This project uses [pre-commit](https://pre-commit.com/) to ensure that code standard checks pass locally before pushing to the remote project repo. [Follow](https://pre-commit.com/#installation) the installation instructions, then set up hooks with `pre-commit install`.

Make sure everything is working correctly by running

    pre-commit run --all

### Setup pre-commit as pre-push hook

To use `pre-push` hooks with pre-commit, run:

    pre-commit install --hook-type pre-push
