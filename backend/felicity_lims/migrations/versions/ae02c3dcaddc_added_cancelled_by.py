"""added cancelled_by

Revision ID: ae02c3dcaddc
Revises: 898e5d1ef6ef
Create Date: 2021-10-21 08:29:59.208433

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel


# revision identifiers, used by Alembic.
revision = 'ae02c3dcaddc'
down_revision = '898e5d1ef6ef'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('analysisresult', sa.Column('cancelled_by_uid', sa.Integer(), nullable=True))
    op.add_column('analysisresult', sa.Column('date_cancelled', sa.DateTime(), nullable=True))
    op.create_foreign_key(None, 'analysisresult', 'user', ['cancelled_by_uid'], ['uid'])
    op.add_column('sample', sa.Column('cancelled_by_uid', sa.Integer(), nullable=True))
    op.add_column('sample', sa.Column('date_cancelled', sa.DateTime(), nullable=True))
    op.create_foreign_key(None, 'sample', 'user', ['cancelled_by_uid'], ['uid'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'sample', type_='foreignkey')
    op.drop_column('sample', 'date_cancelled')
    op.drop_column('sample', 'cancelled_by_uid')
    op.drop_constraint(None, 'analysisresult', type_='foreignkey')
    op.drop_column('analysisresult', 'date_cancelled')
    op.drop_column('analysisresult', 'cancelled_by_uid')
    # ### end Alembic commands ###