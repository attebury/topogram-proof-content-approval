export const serverContract = {
  "type": "server_contract_graph",
  "projection": {
    "id": "proj_api",
    "name": "Starter API",
    "type": "api_contract"
  },
  "routes": [
    {
      "capabilityId": "cap_create_greeting",
      "handlerName": "handleCreateGreeting",
      "repositoryMethod": "createGreeting",
      "method": "POST",
      "path": "/greetings",
      "successStatus": 201,
      "requestContract": {
        "type": "api_request_contract",
        "shape": {
          "id": "shape_input_create_greeting",
          "name": "Create Greeting Input"
        },
        "fields": [
          {
            "name": "message",
            "sourceName": "message",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "message"
            }
          }
        ],
        "required": [
          "message"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_input_create_greeting",
          "title": "Create Greeting Input",
          "description": "Fields accepted when creating a greeting",
          "type": "object",
          "properties": {
            "message": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "message"
          ]
        },
        "transport": {
          "path": [],
          "query": [],
          "header": [],
          "body": [
            {
              "name": "message",
              "sourceName": "message",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "message"
              }
            }
          ]
        }
      },
      "responseContract": {
        "type": "api_response_contract",
        "shape": {
          "id": "shape_output_greeting_detail",
          "name": "Greeting Detail Output"
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
            "name": "message",
            "sourceName": "message",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "message"
            }
          },
          {
            "name": "created_at",
            "sourceName": "created_at",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "created_at"
            }
          }
        ],
        "required": [
          "id",
          "message",
          "created_at"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_output_greeting_detail",
          "title": "Greeting Detail Output",
          "description": "Detailed greeting payload",
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uuid"
            },
            "message": {
              "type": "string"
            },
            "created_at": {
              "type": "string",
              "format": "date-time"
            }
          },
          "additionalProperties": false,
          "required": [
            "id",
            "message",
            "created_at"
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
              "name": "message",
              "sourceName": "message",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "message"
              }
            },
            {
              "name": "created_at",
              "sourceName": "created_at",
              "required": true,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "created_at"
              }
            }
          ]
        }
      },
      "errors": [
        {
          "type": "api_error_case",
          "code": "cap_create_greeting_invalid_request",
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
      "capabilityId": "cap_get_greeting",
      "handlerName": "handleGetGreeting",
      "repositoryMethod": "getGreeting",
      "method": "GET",
      "path": "/greetings/:id",
      "successStatus": 200,
      "requestContract": {
        "type": "api_request_contract",
        "shape": {
          "id": "shape_input_get_greeting",
          "name": "Get Greeting Input"
        },
        "fields": [
          {
            "name": "greeting_id",
            "sourceName": "greeting_id",
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
          "greeting_id"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_input_get_greeting",
          "title": "Get Greeting Input",
          "description": "Input for fetching one greeting",
          "type": "object",
          "properties": {
            "greeting_id": {
              "type": "string",
              "format": "uuid"
            }
          },
          "additionalProperties": false,
          "required": [
            "greeting_id"
          ]
        },
        "transport": {
          "path": [
            {
              "name": "greeting_id",
              "sourceName": "greeting_id",
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
          "id": "shape_output_greeting_detail",
          "name": "Greeting Detail Output"
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
            "name": "message",
            "sourceName": "message",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "message"
            }
          },
          {
            "name": "created_at",
            "sourceName": "created_at",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "created_at"
            }
          }
        ],
        "required": [
          "id",
          "message",
          "created_at"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_output_greeting_detail",
          "title": "Greeting Detail Output",
          "description": "Detailed greeting payload",
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uuid"
            },
            "message": {
              "type": "string"
            },
            "created_at": {
              "type": "string",
              "format": "date-time"
            }
          },
          "additionalProperties": false,
          "required": [
            "id",
            "message",
            "created_at"
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
              "name": "message",
              "sourceName": "message",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "message"
              }
            },
            {
              "name": "created_at",
              "sourceName": "created_at",
              "required": true,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "created_at"
              }
            }
          ]
        }
      },
      "errors": [
        {
          "type": "api_error_case",
          "code": "cap_get_greeting_invalid_request",
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
      "capabilityId": "cap_list_greetings",
      "handlerName": "handleListGreetings",
      "repositoryMethod": "listGreetings",
      "method": "GET",
      "path": "/greetings",
      "successStatus": 200,
      "requestContract": {
        "type": "api_request_contract",
        "shape": {
          "id": "shape_input_list_greetings",
          "name": "List Greetings Input"
        },
        "fields": [
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
              "type": "integer",
              "default": 25
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
          "$id": "topogram:shape:shape_input_list_greetings",
          "title": "List Greetings Input",
          "description": "Input for listing greetings",
          "type": "object",
          "properties": {
            "after": {
              "type": "string"
            },
            "limit": {
              "type": "integer",
              "default": 25
            }
          },
          "additionalProperties": false
        },
        "transport": {
          "path": [],
          "query": [
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
                "type": "integer",
                "default": 25
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
          "id": "shape_output_greeting_detail",
          "name": "Greeting Detail Output"
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
            "name": "message",
            "sourceName": "message",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "message"
            }
          },
          {
            "name": "created_at",
            "sourceName": "created_at",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "created_at"
            }
          }
        ],
        "required": [
          "id",
          "message",
          "created_at"
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
                "$id": "topogram:shape:shape_output_greeting_detail",
                "title": "Greeting Detail Output",
                "description": "Detailed greeting payload",
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "format": "uuid"
                  },
                  "message": {
                    "type": "string"
                  },
                  "created_at": {
                    "type": "string",
                    "format": "date-time"
                  }
                },
                "additionalProperties": false,
                "required": [
                  "id",
                  "message",
                  "created_at"
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
          "$id": "topogram:shape:shape_output_greeting_detail",
          "title": "Greeting Detail Output",
          "description": "Detailed greeting payload",
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uuid"
            },
            "message": {
              "type": "string"
            },
            "created_at": {
              "type": "string",
              "format": "date-time"
            }
          },
          "additionalProperties": false,
          "required": [
            "id",
            "message",
            "created_at"
          ]
        },
        "pagination": null,
        "itemShape": {
          "id": "shape_output_greeting_detail",
          "name": "Greeting Detail Output"
        },
        "ordering": {
          "field": "created_at",
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
              "name": "message",
              "sourceName": "message",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "message"
              }
            },
            {
              "name": "created_at",
              "sourceName": "created_at",
              "required": true,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "created_at"
              }
            }
          ]
        }
      },
      "errors": [
        {
          "type": "api_error_case",
          "code": "cap_list_greetings_invalid_request",
          "status": 400,
          "source": "request_contract"
        },
        {
          "type": "api_error_case",
          "code": "cap_list_greetings_invalid_cursor",
          "status": 400,
          "source": "cursor_contract"
        },
        {
          "type": "api_error_case",
          "code": "cap_list_greetings_invalid_limit",
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
      "capabilityId": "cap_update_greeting",
      "handlerName": "handleUpdateGreeting",
      "repositoryMethod": "updateGreeting",
      "method": "PATCH",
      "path": "/greetings/:id",
      "successStatus": 200,
      "requestContract": {
        "type": "api_request_contract",
        "shape": {
          "id": "shape_input_update_greeting",
          "name": "Update Greeting Input"
        },
        "fields": [
          {
            "name": "greeting_id",
            "sourceName": "greeting_id",
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
            "name": "message",
            "sourceName": "message",
            "required": false,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "message"
            }
          }
        ],
        "required": [
          "greeting_id"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_input_update_greeting",
          "title": "Update Greeting Input",
          "description": "Input for updating a greeting",
          "type": "object",
          "properties": {
            "greeting_id": {
              "type": "string",
              "format": "uuid"
            },
            "message": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "greeting_id"
          ]
        },
        "transport": {
          "path": [
            {
              "name": "greeting_id",
              "sourceName": "greeting_id",
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
              "name": "message",
              "sourceName": "message",
              "required": false,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "message"
              }
            }
          ]
        }
      },
      "responseContract": {
        "type": "api_response_contract",
        "shape": {
          "id": "shape_output_greeting_detail",
          "name": "Greeting Detail Output"
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
            "name": "message",
            "sourceName": "message",
            "required": true,
            "schema": {
              "type": "string"
            },
            "transport": {
              "location": "body",
              "wireName": "message"
            }
          },
          {
            "name": "created_at",
            "sourceName": "created_at",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time"
            },
            "transport": {
              "location": "body",
              "wireName": "created_at"
            }
          }
        ],
        "required": [
          "id",
          "message",
          "created_at"
        ],
        "jsonSchema": {
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "$id": "topogram:shape:shape_output_greeting_detail",
          "title": "Greeting Detail Output",
          "description": "Detailed greeting payload",
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uuid"
            },
            "message": {
              "type": "string"
            },
            "created_at": {
              "type": "string",
              "format": "date-time"
            }
          },
          "additionalProperties": false,
          "required": [
            "id",
            "message",
            "created_at"
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
              "name": "message",
              "sourceName": "message",
              "required": true,
              "schema": {
                "type": "string"
              },
              "transport": {
                "location": "body",
                "wireName": "message"
              }
            },
            {
              "name": "created_at",
              "sourceName": "created_at",
              "required": true,
              "schema": {
                "type": "string",
                "format": "date-time"
              },
              "transport": {
                "location": "body",
                "wireName": "created_at"
              }
            }
          ]
        }
      },
      "errors": [
        {
          "type": "api_error_case",
          "code": "cap_update_greeting_invalid_request",
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
