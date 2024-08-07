import logging
from datetime import datetime

import meilisearch

from felicity.core.config import settings

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class MeiliSearchClient:
    def __init__(self):
        self.client = meilisearch.Client(settings.MEILISEARCH_SERVER, settings.MEILISEARCH_API_KEY)

    def create_index(self, index_name: str):
        logger.info("meilisearch -- create index --")
        return self.client.create_index(uid=index_name, options={"primaryKey": "uid"})

    def add_documents(self, index_name: str, docs: list):
        logger.info("meilisearch -- add documents --")
        index = self.client.index(index_name)
        return index.add_documents(docs)

    def update_documents(self, index_name: str, docs: list):
        logger.info("meilisearch -- update documents --")
        index = self.client.index(index_name)
        return index.update_documents(docs)

    def delete_document(self, index_name: str, doc_id: str):
        logger.info("meilisearch -- delete document --")
        index = self.client.index(index_name)
        return index.delete_document(doc_id)

    def search(
            self,
            index_name: str,
            query: str,
            filters: dict = None,
            date_field: str = None,
            date_gt: datetime = None,
            date_lt: datetime = None
    ):
        logger.info("meilisearch -- search --")
        index = self.client.index(index_name)

        # Build the filter string
        filter_conditions = []
        if filters:
            for field, value in filters.items():
                filter_conditions.append(f"{field} = '{value}'")

        if date_field:
            if date_gt:
                filter_conditions.append(f"{date_field} > {date_gt.timestamp()}")
            if date_lt:
                filter_conditions.append(f"{date_field} < {date_lt.timestamp()}")

        # Combine filters
        filter_string = " AND ".join(filter_conditions) if filter_conditions else None

        options = {"filter": filter_string} if filter_string else {}

        return index.search(query, options)

    def delete_index(self, index_name: str):
        logger.info("meilisearch -- delete index --")
        return self.client.delete_index(index_name)

    def list_indexes(self):
        logger.info("meilisearch -- list indexes --")
        return self.client.get_indexes()
