"""remove unique permisiions

Revision ID: 3c760ffbf383
Revises: 479f77fdb5b9
Create Date: 2021-04-14 17:11:52.569870

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3c760ffbf383'
down_revision = '479f77fdb5b9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_permission_action', table_name='permission')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_index('ix_permission_action', 'permission', ['action'], unique=True)
    # ### end Alembic commands ###