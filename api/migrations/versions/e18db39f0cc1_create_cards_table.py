"""create cards table

Revision ID: e18db39f0cc1
Revises:
Create Date: 2020-11-03 08:33:05.376718

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = 'e18db39f0cc1'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'cards',
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("title", sa.String, nullable=False),
        sa.Column("type", sa.String, nullable=False),
        sa.Column("position", sa.Integer, server_default='100'),
        sa.Column("image", sa.String, server_default='http://lorempixel.com/500/280/'),
    )


def downgrade():
    op.drop_table('cards')

