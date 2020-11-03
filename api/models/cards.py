import sqlalchemy
metadata = sqlalchemy.MetaData()

Card = sqlalchemy.Table(
    "cards",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("position", sqlalchemy.Integer),
    sqlalchemy.Column("title", sqlalchemy.String),
    sqlalchemy.Column("type", sqlalchemy.String),
    sqlalchemy.Column("image", sqlalchemy.String),
)
