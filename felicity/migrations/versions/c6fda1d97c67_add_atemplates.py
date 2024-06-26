"""add-atemplates

Revision ID: c6fda1d97c67
Revises: 65f077efa77b
Create Date: 2024-06-02 20:33:31.358815

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c6fda1d97c67'
down_revision = '65f077efa77b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('analysis_template',
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.Column('department_uid', sa.String(), nullable=True),
    sa.Column('uid', sa.String(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('created_by_uid', sa.String(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('updated_by_uid', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['created_by_uid'], ['user.uid'], ),
    sa.ForeignKeyConstraint(['department_uid'], ['department.uid'], ),
    sa.ForeignKeyConstraint(['updated_by_uid'], ['user.uid'], ),
    sa.PrimaryKeyConstraint('uid')
    )
    op.create_index(op.f('ix_analysis_template_uid'), 'analysis_template', ['uid'], unique=False)
    op.create_table('analysis_analysis_template',
    sa.Column('analysis_uid', sa.String(), nullable=False),
    sa.Column('analysis_template_uid', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['analysis_template_uid'], ['analysis_template.uid'], ),
    sa.ForeignKeyConstraint(['analysis_uid'], ['analysis.uid'], ),
    sa.PrimaryKeyConstraint('analysis_uid', 'analysis_template_uid')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('analysis_analysis_template')
    op.drop_index(op.f('ix_analysis_template_uid'), table_name='analysis_template')
    op.drop_table('analysis_template')
    # ### end Alembic commands ###
