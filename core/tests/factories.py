import factory

from core import models


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = models.User

    username = factory.Faker("email")


class UserWithPasswordFactory(UserFactory):
    """
    Do not use in tests. This is slow. This is mainly used for fake data generation.
    """

    @factory.post_generation
    def password(obj, create, extracted, **kwargs):
        if not create:
            return

        obj.set_password("admin")
        obj.save()


class RoomFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = models.Room

    name = factory.Faker('uri_path')

    @factory.post_generation
    def add_slash(obj, *args, **kwargs):
        obj.name = f"/{obj.name}"
        obj.save()


class MessageFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = models.Message

    text = factory.Faker('text')
    room = factory.SubFactory(RoomFactory)
