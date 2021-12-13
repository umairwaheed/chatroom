from django.core.management.base import BaseCommand

from core.tests import factories


class Command(BaseCommand):
    help = "Generate fake date"

    def handle(self, *args, **options):
        factories.UserWithPasswordFactory(
            is_superuser=True, is_staff=True, username="admin@example.com"
        )

        for _ in range(10):
            factories.MessageFactory.create_batch(
                20,
                room=factories.RoomFactory(),
            )

        self.stdout.write(self.style.SUCCESS("Successfully generated data."))
