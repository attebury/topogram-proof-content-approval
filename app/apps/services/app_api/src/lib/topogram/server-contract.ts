export const serverContract = {
  "type": "server_contract_graph",
  "projection": {
    "id": "proj_api",
    "name": "Content Approval API",
    "type": "api_contract"
  },
  "routes": [
    {
      "capabilityId": "cap_submit_content",
      "handlerName": "handleSubmitContent",
      "repositoryMethod": "submitContent",
      "method": "POST",
      "path": "/submissions",
      "successStatus": 201,
      "requestContract": {
        "type": "api_request_contract",
        "shape": {
          "id": "shape_input_submit_content",
          "name": "Submit Content Input"
        },
        "fields": [
          {
            "name": "title",
            "sourceName": "title",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "title"
            }
          },
          {
            "name": "body",
            "sourceName": "body",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "body"
            }
          },
          {
            "name": "author_name",
            "sourceName": "author_name",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "author_name"
            }
          }
        ],
        "required": [
          "title",
          "body",
          "author_name"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_input_submit_content",
          "title": "Submit Content Input",
          "description": "Fields required to submit content for review.",
          "type": "object",
          "properties": {
            "title": {
              "type": "string"
            },
            "body": {
              "type": "string"
            },
            "author_name": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "title",
            "body",
            "author_name"
          ]
        },
        "transport": {
          "path": [],
          "query": [],
          "header": [],
          "body": [
            {
              "name": "title",
              "sourceName": "title",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "title"
              }
            },
            {
              "name": "body",
              "sourceName": "body",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "body"
              }
            },
            {
              "name": "author_name",
              "sourceName": "author_name",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "author_name"
              }
            }
          ]
        }
      },
      "responseContract": {
        "type": "api_response_contract",
        "shape": {
          "id": "shape_output_submission_detail",
          "name": "Submission Detail Output"
        },
        "fields": [
          {
            "name": "id",
            "sourceName": "id",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid"
            },
            "transport": {
              "location": "body",
              "wireName": "id"
            }
          },
          {
            "name": "title",
            "sourceName": "title",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "title"
            }
          },
          {
            "name": "body",
            "sourceName": "body",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "body"
            }
          },
          {
            "name": "status",
            "sourceName": "status",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "status"
            }
          },
          {
            "name": "author_name",
            "sourceName": "author_name",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "author_name"
            }
          },
          {
            "name": "submitted_at",
            "sourceName": "submitted_at",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "submitted_at"
            }
          },
          {
            "name": "reviewed_at",
            "sourceName": "reviewed_at",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "reviewed_at"
            }
          },
          {
            "name": "reviewer_note",
            "sourceName": "reviewer_note",
            "required": false,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "reviewer_note"
            }
          }
        ],
        "required": [
          "id",
          "title",
          "body",
          "status",
          "author_name",
          "submitted_at"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_output_submission_detail",
          "title": "Submission Detail Output",
          "description": "Detailed submission payload for editorial review.",
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uuid"
            },
            "title": {
              "type": "string"
            },
            "body": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "author_name": {
              "type": "string"
            },
            "submitted_at": {
              "type": "string",
              "format": "date-time"
            },
            "reviewed_at": {
              "type": "string",
              "format": "date-time"
            },
            "reviewer_note": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "id",
            "title",
            "body",
            "status",
            "author_name",
            "submitted_at"
          ]
        },
        "mode": "item",
        "collection": false,
        "itemJsonSchema": null,
        "pagination": null,
        "transport": {
          "path": [],
          "query": [],
          "header": [],
          "body": [
            {
              "name": "id",
              "sourceName": "id",
              "required": true,
              "schema": {
                "type": "string",
                "format": "uuid"
              },
              "transport": {
                "location": "body",
                "wireName": "id"
              }
            },
            {
              "name": "title",
              "sourceName": "title",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "title"
              }
            },
            {
              "name": "body",
              "sourceName": "body",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "body"
              }
            },
            {
              "name": "status",
              "sourceName": "status",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "status"
              }
            },
            {
              "name": "author_name",
              "sourceName": "author_name",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "author_name"
              }
            },
            {
              "name": "submitted_at",
              "sourceName": "submitted_at",
              "required": true,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "submitted_at"
              }
            },
            {
              "name": "reviewed_at",
              "sourceName": "reviewed_at",
              "required": false,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "reviewed_at"
              }
            },
            {
              "name": "reviewer_note",
              "sourceName": "reviewer_note",
              "required": false,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "reviewer_note"
              }
            }
          ]
        }
      },
      "errors": [
        {
          "type": "api_error_case",
          "code": "cap_submit_content_invalid_request",
          "status": 400,
          "source": "request_contract"
        }
      ],
      "endpoint": {
        "auth": "none",
        "authz": [],
        "preconditions": [],
        "idempotency": [],
        "cache": [],
        "asyncJobs": [],
        "asyncStatus": [],
        "download": []
      }
    },
    {
      "capabilityId": "cap_get_submission",
      "handlerName": "handleGetSubmission",
      "repositoryMethod": "getSubmission",
      "method": "GET",
      "path": "/submissions/:id",
      "successStatus": 200,
      "requestContract": {
        "type": "api_request_contract",
        "shape": {
          "id": "shape_input_get_submission",
          "name": "Get Submission Input"
        },
        "fields": [
          {
            "name": "submission_id",
            "sourceName": "submission_id",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid"
            },
            "transport": {
              "location": "path",
              "wireName": "id"
            }
          }
        ],
        "required": [
          "submission_id"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_input_get_submission",
          "title": "Get Submission Input",
          "description": "Identifier for a single submission.",
          "type": "object",
          "properties": {
            "submission_id": {
              "type": "string",
              "format": "uuid"
            }
          },
          "additionalProperties": false,
          "required": [
            "submission_id"
          ]
        },
        "transport": {
          "path": [
            {
              "name": "submission_id",
              "sourceName": "submission_id",
              "required": true,
              "schema": {
                "type": "string",
                "format": "uuid"
              },
              "transport": {
                "location": "path",
                "wireName": "id"
              }
            }
          ],
          "query": [],
          "header": [],
          "body": []
        }
      },
      "responseContract": {
        "type": "api_response_contract",
        "shape": {
          "id": "shape_output_submission_detail",
          "name": "Submission Detail Output"
        },
        "fields": [
          {
            "name": "id",
            "sourceName": "id",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid"
            },
            "transport": {
              "location": "body",
              "wireName": "id"
            }
          },
          {
            "name": "title",
            "sourceName": "title",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "title"
            }
          },
          {
            "name": "body",
            "sourceName": "body",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "body"
            }
          },
          {
            "name": "status",
            "sourceName": "status",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "status"
            }
          },
          {
            "name": "author_name",
            "sourceName": "author_name",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "author_name"
            }
          },
          {
            "name": "submitted_at",
            "sourceName": "submitted_at",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "submitted_at"
            }
          },
          {
            "name": "reviewed_at",
            "sourceName": "reviewed_at",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "reviewed_at"
            }
          },
          {
            "name": "reviewer_note",
            "sourceName": "reviewer_note",
            "required": false,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "reviewer_note"
            }
          }
        ],
        "required": [
          "id",
          "title",
          "body",
          "status",
          "author_name",
          "submitted_at"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_output_submission_detail",
          "title": "Submission Detail Output",
          "description": "Detailed submission payload for editorial review.",
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uuid"
            },
            "title": {
              "type": "string"
            },
            "body": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "author_name": {
              "type": "string"
            },
            "submitted_at": {
              "type": "string",
              "format": "date-time"
            },
            "reviewed_at": {
              "type": "string",
              "format": "date-time"
            },
            "reviewer_note": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "id",
            "title",
            "body",
            "status",
            "author_name",
            "submitted_at"
          ]
        },
        "mode": "item",
        "collection": false,
        "itemJsonSchema": null,
        "pagination": null,
        "transport": {
          "path": [],
          "query": [],
          "header": [],
          "body": [
            {
              "name": "id",
              "sourceName": "id",
              "required": true,
              "schema": {
                "type": "string",
                "format": "uuid"
              },
              "transport": {
                "location": "body",
                "wireName": "id"
              }
            },
            {
              "name": "title",
              "sourceName": "title",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "title"
              }
            },
            {
              "name": "body",
              "sourceName": "body",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "body"
              }
            },
            {
              "name": "status",
              "sourceName": "status",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "status"
              }
            },
            {
              "name": "author_name",
              "sourceName": "author_name",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "author_name"
              }
            },
            {
              "name": "submitted_at",
              "sourceName": "submitted_at",
              "required": true,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "submitted_at"
              }
            },
            {
              "name": "reviewed_at",
              "sourceName": "reviewed_at",
              "required": false,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "reviewed_at"
              }
            },
            {
              "name": "reviewer_note",
              "sourceName": "reviewer_note",
              "required": false,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "reviewer_note"
              }
            }
          ]
        }
      },
      "errors": [
        {
          "type": "api_error_case",
          "code": "cap_get_submission_invalid_request",
          "status": 400,
          "source": "request_contract"
        }
      ],
      "endpoint": {
        "auth": "none",
        "authz": [],
        "preconditions": [],
        "idempotency": [],
        "cache": [],
        "asyncJobs": [],
        "asyncStatus": [],
        "download": []
      }
    },
    {
      "capabilityId": "cap_list_submissions",
      "handlerName": "handleListSubmissions",
      "repositoryMethod": "listSubmissions",
      "method": "GET",
      "path": "/submissions",
      "successStatus": 200,
      "requestContract": {
        "type": "api_request_contract",
        "shape": {
          "id": "shape_input_list_submissions",
          "name": "List Submissions Input"
        },
        "fields": [
          {
            "name": "status",
            "sourceName": "status",
            "required": false,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "query",
              "wireName": "status"
            }
          },
          {
            "name": "after",
            "sourceName": "after",
            "required": false,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "query",
              "wireName": "after"
            }
          },
          {
            "name": "limit",
            "sourceName": "limit",
            "required": false,
            "schema": {
              "type": "number"
            },
            "transport": {
              "location": "query",
              "wireName": "limit"
            }
          }
        ],
        "required": [],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_input_list_submissions",
          "title": "List Submissions Input",
          "description": "Optional filters for the review queue.",
          "type": "object",
          "properties": {
            "status": {
              "type": "string"
            },
            "after": {
              "type": "string"
            },
            "limit": {
              "type": "number"
            }
          },
          "additionalProperties": false
        },
        "transport": {
          "path": [],
          "query": [
            {
              "name": "status",
              "sourceName": "status",
              "required": false,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "query",
                "wireName": "status"
              }
            },
            {
              "name": "after",
              "sourceName": "after",
              "required": false,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "query",
                "wireName": "after"
              }
            },
            {
              "name": "limit",
              "sourceName": "limit",
              "required": false,
              "schema": {
                "type": "number"
              },
              "transport": {
                "location": "query",
                "wireName": "limit"
              }
            }
          ],
          "header": [],
          "body": []
        }
      },
      "responseContract": {
        "type": "api_response_contract",
        "shape": {
          "id": "shape_output_submission_detail",
          "name": "Submission Detail Output"
        },
        "fields": [
          {
            "name": "id",
            "sourceName": "id",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid"
            },
            "transport": {
              "location": "body",
              "wireName": "id"
            }
          },
          {
            "name": "title",
            "sourceName": "title",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "title"
            }
          },
          {
            "name": "body",
            "sourceName": "body",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "body"
            }
          },
          {
            "name": "status",
            "sourceName": "status",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "status"
            }
          },
          {
            "name": "author_name",
            "sourceName": "author_name",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "author_name"
            }
          },
          {
            "name": "submitted_at",
            "sourceName": "submitted_at",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "submitted_at"
            }
          },
          {
            "name": "reviewed_at",
            "sourceName": "reviewed_at",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "reviewed_at"
            }
          },
          {
            "name": "reviewer_note",
            "sourceName": "reviewer_note",
            "required": false,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "reviewer_note"
            }
          }
        ],
        "required": [
          "id",
          "title",
          "body",
          "status",
          "author_name",
          "submitted_at"
        ],
        "jsonSchema": {
          "type": "object",
          "additionalProperties": false,
          "required": [
            "items",
            "next_cursor"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$schema": "https://json-schema.org/draft/2020-12/schema",
                "$id": "topogram:shape:shape_output_submission_detail",
                "title": "Submission Detail Output",
                "description": "Detailed submission payload for editorial review.",
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "format": "uuid"
                  },
                  "title": {
                    "type": "string"
                  },
                  "body": {
                    "type": "string"
                  },
                  "status": {
                    "type": "string"
                  },
                  "author_name": {
                    "type": "string"
                  },
                  "submitted_at": {
                    "type": "string",
                    "format": "date-time"
                  },
                  "reviewed_at": {
                    "type": "string",
                    "format": "date-time"
                  },
                  "reviewer_note": {
                    "type": "string"
                  }
                },
                "additionalProperties": false,
                "required": [
                  "id",
                  "title",
                  "body",
                  "status",
                  "author_name",
                  "submitted_at"
                ]
              }
            },
            "next_cursor": {
              "type": "string"
            }
          }
        },
        "mode": "cursor",
        "collection": true,
        "itemJsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_output_submission_detail",
          "title": "Submission Detail Output",
          "description": "Detailed submission payload for editorial review.",
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uuid"
            },
            "title": {
              "type": "string"
            },
            "body": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "author_name": {
              "type": "string"
            },
            "submitted_at": {
              "type": "string",
              "format": "date-time"
            },
            "reviewed_at": {
              "type": "string",
              "format": "date-time"
            },
            "reviewer_note": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "id",
            "title",
            "body",
            "status",
            "author_name",
            "submitted_at"
          ]
        },
        "pagination": null,
        "itemShape": {
          "id": "shape_output_submission_detail",
          "name": "Submission Detail Output"
        },
        "ordering": {
          "field": "submitted_at",
          "direction": "desc"
        },
        "cursor": {
          "requestAfter": "after",
          "responseNext": "next_cursor",
          "responsePrev": null
        },
        "limit": {
          "field": "limit",
          "defaultValue": 25,
          "maxValue": 100
        },
        "total": {
          "included": false
        },
        "transport": {
          "path": [],
          "query": [],
          "header": [],
          "body": [
            {
              "name": "id",
              "sourceName": "id",
              "required": true,
              "schema": {
                "type": "string",
                "format": "uuid"
              },
              "transport": {
                "location": "body",
                "wireName": "id"
              }
            },
            {
              "name": "title",
              "sourceName": "title",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "title"
              }
            },
            {
              "name": "body",
              "sourceName": "body",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "body"
              }
            },
            {
              "name": "status",
              "sourceName": "status",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "status"
              }
            },
            {
              "name": "author_name",
              "sourceName": "author_name",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "author_name"
              }
            },
            {
              "name": "submitted_at",
              "sourceName": "submitted_at",
              "required": true,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "submitted_at"
              }
            },
            {
              "name": "reviewed_at",
              "sourceName": "reviewed_at",
              "required": false,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "reviewed_at"
              }
            },
            {
              "name": "reviewer_note",
              "sourceName": "reviewer_note",
              "required": false,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "reviewer_note"
              }
            }
          ]
        }
      },
      "errors": [
        {
          "type": "api_error_case",
          "code": "cap_list_submissions_invalid_request",
          "status": 400,
          "source": "request_contract"
        },
        {
          "type": "api_error_case",
          "code": "cap_list_submissions_invalid_cursor",
          "status": 400,
          "source": "cursor_contract"
        },
        {
          "type": "api_error_case",
          "code": "cap_list_submissions_invalid_limit",
          "status": 400,
          "source": "cursor_contract"
        }
      ],
      "endpoint": {
        "auth": "none",
        "authz": [],
        "preconditions": [],
        "idempotency": [],
        "cache": [],
        "asyncJobs": [],
        "asyncStatus": [],
        "download": []
      }
    },
    {
      "capabilityId": "cap_approve_submission",
      "handlerName": "handleApproveSubmission",
      "repositoryMethod": "approveSubmission",
      "method": "POST",
      "path": "/submissions/:id/approve",
      "successStatus": 200,
      "requestContract": {
        "type": "api_request_contract",
        "shape": {
          "id": "shape_input_approve_submission",
          "name": "Approve Submission Input"
        },
        "fields": [
          {
            "name": "submission_id",
            "sourceName": "submission_id",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid"
            },
            "transport": {
              "location": "path",
              "wireName": "id"
            }
          },
          {
            "name": "reviewer_note",
            "sourceName": "reviewer_note",
            "required": false,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "reviewer_note"
            }
          }
        ],
        "required": [
          "submission_id"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_input_approve_submission",
          "title": "Approve Submission Input",
          "description": "Review note captured when approving a submission.",
          "type": "object",
          "properties": {
            "submission_id": {
              "type": "string",
              "format": "uuid"
            },
            "reviewer_note": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "submission_id"
          ]
        },
        "transport": {
          "path": [
            {
              "name": "submission_id",
              "sourceName": "submission_id",
              "required": true,
              "schema": {
                "type": "string",
                "format": "uuid"
              },
              "transport": {
                "location": "path",
                "wireName": "id"
              }
            }
          ],
          "query": [],
          "header": [],
          "body": [
            {
              "name": "reviewer_note",
              "sourceName": "reviewer_note",
              "required": false,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "reviewer_note"
              }
            }
          ]
        }
      },
      "responseContract": {
        "type": "api_response_contract",
        "shape": {
          "id": "shape_output_submission_detail",
          "name": "Submission Detail Output"
        },
        "fields": [
          {
            "name": "id",
            "sourceName": "id",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid"
            },
            "transport": {
              "location": "body",
              "wireName": "id"
            }
          },
          {
            "name": "title",
            "sourceName": "title",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "title"
            }
          },
          {
            "name": "body",
            "sourceName": "body",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "body"
            }
          },
          {
            "name": "status",
            "sourceName": "status",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "status"
            }
          },
          {
            "name": "author_name",
            "sourceName": "author_name",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "author_name"
            }
          },
          {
            "name": "submitted_at",
            "sourceName": "submitted_at",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "submitted_at"
            }
          },
          {
            "name": "reviewed_at",
            "sourceName": "reviewed_at",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "reviewed_at"
            }
          },
          {
            "name": "reviewer_note",
            "sourceName": "reviewer_note",
            "required": false,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "reviewer_note"
            }
          }
        ],
        "required": [
          "id",
          "title",
          "body",
          "status",
          "author_name",
          "submitted_at"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_output_submission_detail",
          "title": "Submission Detail Output",
          "description": "Detailed submission payload for editorial review.",
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uuid"
            },
            "title": {
              "type": "string"
            },
            "body": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "author_name": {
              "type": "string"
            },
            "submitted_at": {
              "type": "string",
              "format": "date-time"
            },
            "reviewed_at": {
              "type": "string",
              "format": "date-time"
            },
            "reviewer_note": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "id",
            "title",
            "body",
            "status",
            "author_name",
            "submitted_at"
          ]
        },
        "mode": "item",
        "collection": false,
        "itemJsonSchema": null,
        "pagination": null,
        "transport": {
          "path": [],
          "query": [],
          "header": [],
          "body": [
            {
              "name": "id",
              "sourceName": "id",
              "required": true,
              "schema": {
                "type": "string",
                "format": "uuid"
              },
              "transport": {
                "location": "body",
                "wireName": "id"
              }
            },
            {
              "name": "title",
              "sourceName": "title",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "title"
              }
            },
            {
              "name": "body",
              "sourceName": "body",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "body"
              }
            },
            {
              "name": "status",
              "sourceName": "status",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "status"
              }
            },
            {
              "name": "author_name",
              "sourceName": "author_name",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "author_name"
              }
            },
            {
              "name": "submitted_at",
              "sourceName": "submitted_at",
              "required": true,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "submitted_at"
              }
            },
            {
              "name": "reviewed_at",
              "sourceName": "reviewed_at",
              "required": false,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "reviewed_at"
              }
            },
            {
              "name": "reviewer_note",
              "sourceName": "reviewer_note",
              "required": false,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "reviewer_note"
              }
            }
          ]
        }
      },
      "errors": [
        {
          "type": "api_error_case",
          "code": "cap_approve_submission_invalid_request",
          "status": 400,
          "source": "request_contract"
        }
      ],
      "endpoint": {
        "auth": "none",
        "authz": [],
        "preconditions": [],
        "idempotency": [],
        "cache": [],
        "asyncJobs": [],
        "asyncStatus": [],
        "download": []
      }
    },
    {
      "capabilityId": "cap_request_changes",
      "handlerName": "handleRequestChanges",
      "repositoryMethod": "requestChanges",
      "method": "POST",
      "path": "/submissions/:id/request-changes",
      "successStatus": 200,
      "requestContract": {
        "type": "api_request_contract",
        "shape": {
          "id": "shape_input_request_changes",
          "name": "Request Changes Input"
        },
        "fields": [
          {
            "name": "submission_id",
            "sourceName": "submission_id",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid"
            },
            "transport": {
              "location": "path",
              "wireName": "id"
            }
          },
          {
            "name": "reviewer_note",
            "sourceName": "reviewer_note",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "reviewer_note"
            }
          }
        ],
        "required": [
          "submission_id",
          "reviewer_note"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_input_request_changes",
          "title": "Request Changes Input",
          "description": "Review note required when requesting changes.",
          "type": "object",
          "properties": {
            "submission_id": {
              "type": "string",
              "format": "uuid"
            },
            "reviewer_note": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "submission_id",
            "reviewer_note"
          ]
        },
        "transport": {
          "path": [
            {
              "name": "submission_id",
              "sourceName": "submission_id",
              "required": true,
              "schema": {
                "type": "string",
                "format": "uuid"
              },
              "transport": {
                "location": "path",
                "wireName": "id"
              }
            }
          ],
          "query": [],
          "header": [],
          "body": [
            {
              "name": "reviewer_note",
              "sourceName": "reviewer_note",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "reviewer_note"
              }
            }
          ]
        }
      },
      "responseContract": {
        "type": "api_response_contract",
        "shape": {
          "id": "shape_output_submission_detail",
          "name": "Submission Detail Output"
        },
        "fields": [
          {
            "name": "id",
            "sourceName": "id",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid"
            },
            "transport": {
              "location": "body",
              "wireName": "id"
            }
          },
          {
            "name": "title",
            "sourceName": "title",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "title"
            }
          },
          {
            "name": "body",
            "sourceName": "body",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "body"
            }
          },
          {
            "name": "status",
            "sourceName": "status",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "status"
            }
          },
          {
            "name": "author_name",
            "sourceName": "author_name",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "author_name"
            }
          },
          {
            "name": "submitted_at",
            "sourceName": "submitted_at",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "submitted_at"
            }
          },
          {
            "name": "reviewed_at",
            "sourceName": "reviewed_at",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "reviewed_at"
            }
          },
          {
            "name": "reviewer_note",
            "sourceName": "reviewer_note",
            "required": false,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "reviewer_note"
            }
          }
        ],
        "required": [
          "id",
          "title",
          "body",
          "status",
          "author_name",
          "submitted_at"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_output_submission_detail",
          "title": "Submission Detail Output",
          "description": "Detailed submission payload for editorial review.",
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uuid"
            },
            "title": {
              "type": "string"
            },
            "body": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "author_name": {
              "type": "string"
            },
            "submitted_at": {
              "type": "string",
              "format": "date-time"
            },
            "reviewed_at": {
              "type": "string",
              "format": "date-time"
            },
            "reviewer_note": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "id",
            "title",
            "body",
            "status",
            "author_name",
            "submitted_at"
          ]
        },
        "mode": "item",
        "collection": false,
        "itemJsonSchema": null,
        "pagination": null,
        "transport": {
          "path": [],
          "query": [],
          "header": [],
          "body": [
            {
              "name": "id",
              "sourceName": "id",
              "required": true,
              "schema": {
                "type": "string",
                "format": "uuid"
              },
              "transport": {
                "location": "body",
                "wireName": "id"
              }
            },
            {
              "name": "title",
              "sourceName": "title",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "title"
              }
            },
            {
              "name": "body",
              "sourceName": "body",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "body"
              }
            },
            {
              "name": "status",
              "sourceName": "status",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "status"
              }
            },
            {
              "name": "author_name",
              "sourceName": "author_name",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "author_name"
              }
            },
            {
              "name": "submitted_at",
              "sourceName": "submitted_at",
              "required": true,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "submitted_at"
              }
            },
            {
              "name": "reviewed_at",
              "sourceName": "reviewed_at",
              "required": false,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "reviewed_at"
              }
            },
            {
              "name": "reviewer_note",
              "sourceName": "reviewer_note",
              "required": false,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "reviewer_note"
              }
            }
          ]
        }
      },
      "errors": [
        {
          "type": "api_error_case",
          "code": "cap_request_changes_invalid_request",
          "status": 400,
          "source": "request_contract"
        }
      ],
      "endpoint": {
        "auth": "none",
        "authz": [],
        "preconditions": [],
        "idempotency": [],
        "cache": [],
        "asyncJobs": [],
        "asyncStatus": [],
        "download": []
      }
    }
  ]
} as const;
