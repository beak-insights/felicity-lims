"""removed-date_generated

Revision ID: e598ed62784d
Revises: 6f377b641bc8
Create Date: 2024-07-31 12:01:47.539687

"""
import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'e598ed62784d'
down_revision = '6f377b641bc8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('report_impress', 'date_generated')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('report_impress',
                  sa.Column('date_generated', postgresql.TIMESTAMP(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
