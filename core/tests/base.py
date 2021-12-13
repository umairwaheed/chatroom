from django.test import TestCase

from core.tests import client


class BaseTestCase(TestCase):
    def setUp(self):
        self.client = client.Client()
