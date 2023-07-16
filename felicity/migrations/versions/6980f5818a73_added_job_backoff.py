"""added job backoff

Revision ID: 6980f5818a73
Revises: 72ca14ae83c4
Create Date: 2023-05-25 08:44:44.563522

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6980f5818a73'
down_revision = '72ca14ae83c4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('job', sa.Column('next_try', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('job', 'next_try')
    # ### end Alembic commands ###