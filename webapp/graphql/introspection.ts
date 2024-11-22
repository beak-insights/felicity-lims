import type { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": {
      "name": "Subscription"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "ActivityFeedType",
        "fields": [
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "subscribers",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ActivityProcessType",
        "fields": [
          {
            "name": "objectType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ActivityStreamType",
        "fields": [
          {
            "name": "actionObject",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "WorkSheetTypeSampleTypeAnalysisResultTypeReportMetaTypeUnknownObjectType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "actionObjectType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "actionObjectUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "actor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "actorUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "feeds",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ActivityFeedType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "target",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "targetUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "verb",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "viewers",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserType",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AnalysisCategoryResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalysisCategoryType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisCategoryType",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "department",
            "type": {
              "kind": "OBJECT",
              "name": "DepartmentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "departmentUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AnalysisCorrectionFactorResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalysisCorrectionFactorType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisCorrectionFactorType",
        "fields": [
          {
            "name": "analysisUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "factor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "instrumentUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "methodUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisWithProfiles",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AnalysisDetectionLimitResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalysisDetectionLimitType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisDetectionLimitType",
        "fields": [
          {
            "name": "analysisUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "instrumentUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lowerLimit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "methodUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "upperLimit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AnalysisDiscountResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalysisDiscountType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisDiscountType",
        "fields": [
          {
            "name": "analysis",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "analysisUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "discountType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "endDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "startDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "valueAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "valuePercent",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "valueType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "voucher",
            "type": {
              "kind": "OBJECT",
              "name": "VoucherType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "voucherUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisWithProfiles",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AnalysisInterimResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalysisInterimType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisInterimType",
        "fields": [
          {
            "name": "analysisUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "instrumentUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "key",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AnalysisMappingResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalysisMappingType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisMappingType",
        "fields": [
          {
            "name": "analysis",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "analysisUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "codingStandard",
            "type": {
              "kind": "OBJECT",
              "name": "CodingStandardType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "codingStandardUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AnalysisPriceResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalysisPriceType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisPriceType",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "analysis",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "analysisUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AnalysisProfileResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ProfileType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisRequestCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisRequestEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisRequestWithSamples",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisRequestEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisRequestWithSamples",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AnalysisRequestResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalysisRequestWithSamples"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisRequestType",
        "fields": [
          {
            "name": "client",
            "type": {
              "kind": "OBJECT",
              "name": "ClientType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "clientRequestId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "clientUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "internalUse",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "metadataSnapshot",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "patient",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PatientType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "patientUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "requestId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisRequestWithSamples",
        "fields": [
          {
            "name": "client",
            "type": {
              "kind": "OBJECT",
              "name": "ClientType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "clientRequestId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "clientUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "internalUse",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "metadataSnapshot",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "patient",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PatientType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "patientUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "requestId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "samples",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SampleType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisResultCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisResultEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisResultType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisResultEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisResultType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AnalysisResultResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ResultListingType"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "AnalysisResultSubmitResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "OperationSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisResultType",
        "fields": [
          {
            "name": "analysis",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "analysisUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "analyst",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "analystUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "assigned",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "cancelledBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "cancelledByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateCancelled",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateInvalidated",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateSubmitted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateVerified",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dueDate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "invalidatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "invalidatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "laboratoryInstrument",
            "type": {
              "kind": "OBJECT",
              "name": "LaboratoryInstrumentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "laboratoryInstrumentUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "metadataSnapshot",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "method",
            "type": {
              "kind": "OBJECT",
              "name": "MethodType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "methodUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "parent",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisResultType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "parentId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reflexLevel",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reportable",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "result",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "retest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "sample",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SampleType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sampleUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "submittedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "submittedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "verifiedBy",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "worksheetId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "worksheetPosition",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "worksheetUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AnalysisSpecificationResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalysisSpecificationType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisSpecificationType",
        "fields": [
          {
            "name": "ageMax",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ageMin",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "analysisUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "gender",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "max",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "maxReport",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "maxWarn",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "methodUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "minReport",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "minWarn",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "unit",
            "type": {
              "kind": "OBJECT",
              "name": "UnitType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "unitUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "warnReport",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "warnValues",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AnalysisTemplateResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalysisTemplateType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisTemplateType",
        "fields": [
          {
            "name": "analyses",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "department",
            "type": {
              "kind": "OBJECT",
              "name": "DepartmentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "departmentUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisType",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "category",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisCategoryType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "categoryUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "correctionFactors",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisCorrectionFactorType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "department",
            "type": {
              "kind": "OBJECT",
              "name": "DepartmentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "departmentUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "detectionLimits",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisDetectionLimitType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hidden",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "instruments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "InstrumentType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "interims",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisInterimType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "internalUse",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "keyword",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "methods",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MethodType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "precision",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "requiredVerifications",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "resultOptions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ResultOptionType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "resultType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sampleTypes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SampleTypeTyp",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "selfVerification",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sortKey",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "specifications",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisSpecificationType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "tatLengthMinutes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uncertainties",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisUncertaintyType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "unit",
            "type": {
              "kind": "OBJECT",
              "name": "UnitType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "unitUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AnalysisUncertaintyResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalysisUncertaintyType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisUncertaintyType",
        "fields": [
          {
            "name": "analysisUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "instrumentUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "max",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "methodUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AnalysisWithProfiles",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "category",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisCategoryType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "categoryUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "correctionFactors",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisCorrectionFactorType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "department",
            "type": {
              "kind": "OBJECT",
              "name": "DepartmentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "departmentUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "detectionLimits",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisDetectionLimitType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hidden",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "instruments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "InstrumentType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "interims",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisInterimType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "internalUse",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "keyword",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "methods",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MethodType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "precision",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "profiles",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProfileType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "requiredVerifications",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "resultOptions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ResultOptionType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "resultType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sampleTypes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SampleTypeTyp",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "selfVerification",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sortKey",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "specifications",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisSpecificationType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "tatLengthMinutes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uncertainties",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisUncertaintyType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "unit",
            "type": {
              "kind": "OBJECT",
              "name": "UnitType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "unitUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AuditLogType",
        "fields": [
          {
            "name": "action",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "stateAfter",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "stateBefore",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "targetType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "targetUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AuthenticatedData",
        "fields": [
          {
            "name": "refresh",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "token",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "tokenType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "AuthenticatedDataResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AuthenticatedData"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CalibrationCertificateResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CalibrationCertificateType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CalibrationCertificateType",
        "fields": [
          {
            "name": "approvedBy",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "certificateCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateIssued",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "internal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "issuer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "laboratoryInstrument",
            "type": {
              "kind": "OBJECT",
              "name": "LaboratoryInstrumentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "laboratoryInstrumentUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "performedBy",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "remarks",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "validFromDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "validToDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ClientContactResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ClientContactType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ClientContactType",
        "fields": [
          {
            "name": "businessPhone",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "client",
            "type": {
              "kind": "OBJECT",
              "name": "ClientType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "clientUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "consentSms",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "creatorName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "creatorUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "emailCc",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "firstName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mobilePhone",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatorName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatorUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ClientCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ClientEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ClientType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ClientEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ClientType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ClientResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ClientType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ClientType",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "consentEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "consentSms",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "contacts",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ClientContactType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "district",
            "type": {
              "kind": "OBJECT",
              "name": "DistrictType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "districtUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "emailCc",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "internalUse",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "phoneBusiness",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "phoneMobile",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "province",
            "type": {
              "kind": "OBJECT",
              "name": "ProvinceType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "provinceUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "CodingStandardResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CodingStandardType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CodingStandardType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "CountryResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CountryType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CountryType",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreateQCSetData",
        "fields": [
          {
            "name": "qcSets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "QCSetWithSamples",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "DeleteContactResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeletedItem"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeletedItem"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeletedItem",
        "fields": [
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "DepartmentResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DepartmentType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DepartmentType",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DistrictCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "DistrictEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "DistrictType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DistrictEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DistrictType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "DistrictResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DistrictType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DistrictType",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "businessPhone",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "emailCc",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mobilePhone",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "province",
            "type": {
              "kind": "OBJECT",
              "name": "ProvinceType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "provinceUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GroupCount",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "group",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GroupData",
        "fields": [
          {
            "name": "counts",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "GroupCount",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "group",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "GroupResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "GroupType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "GroupType",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "GroupType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "keyword",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "members",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pages",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "permissions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PermissionType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "GroupType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GroupedCounts",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "GroupCount",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GroupedData",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "GroupData",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "HazardResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "HazardType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "HazardType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "IdentificationResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "IdentificationType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "IdentificationType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "InstrumentCalibrationResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "InstrumentCalibrationType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "InstrumentCalibrationType",
        "fields": [
          {
            "name": "calibrationId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateReported",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "endDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "laboratoryInstrument",
            "type": {
              "kind": "OBJECT",
              "name": "LaboratoryInstrumentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "laboratoryInstrumentUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "notesBefore",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "performedBy",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "remarks",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reportId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "startDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "workDone",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "InstrumentCompetenceResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "InstrumentCompetenceType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "InstrumentCompetenceType",
        "fields": [
          {
            "name": "competence",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "expiryDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "instrument",
            "type": {
              "kind": "OBJECT",
              "name": "InstrumentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "instrumentUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "internal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "issueDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "InstrumentCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "InstrumentEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "InstrumentType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "InstrumentEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "InstrumentType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "InstrumentResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "InstrumentType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "InstrumentType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "instrumentType",
            "type": {
              "kind": "OBJECT",
              "name": "InstrumentTypeType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "instrumentTypeUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "keyword",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "laboratoryInstruments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LaboratoryInstrumentType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "manufacturer",
            "type": {
              "kind": "OBJECT",
              "name": "ManufacturerType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "manufacturerUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "methods",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MethodType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "supplier",
            "type": {
              "kind": "OBJECT",
              "name": "SupplierType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "supplierUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "InstrumentTypeCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "InstrumentTypeEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "InstrumentTypeType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "InstrumentTypeEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "InstrumentTypeType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "InstrumentTypeResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "InstrumentTypeType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "InstrumentTypeType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaboratoryInstrumentCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LaboratoryInstrumentEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LaboratoryInstrumentType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaboratoryInstrumentEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LaboratoryInstrumentType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "LaboratoryInstrumentResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "LaboratoryInstrumentType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LaboratoryInstrumentType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateCommissioned",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateDecommissioned",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "instrument",
            "type": {
              "kind": "OBJECT",
              "name": "InstrumentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "instrumentUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "labName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "serialNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "LaboratoryResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "LaboratoryType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "LaboratorySettingResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "LaboratorySettingType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LaboratorySettingType",
        "fields": [
          {
            "name": "allowAutoBilling",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "allowBilling",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "allowPatientRegistration",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "allowSampleRegistration",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "allowSelfVerification",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "allowWorksheetCreation",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "autoReceiveSamples",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultRoute",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultTatMinutes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultTheme",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "inactivityLogOut",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "laboratory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LaboratoryType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "laboratoryUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "passwordLifetime",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "paymentTermsDays",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "stickerCopies",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaboratoryType",
        "fields": [
          {
            "name": "address",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "banking",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "businessPhone",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "emailCc",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "labManager",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "labManagerUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "labName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "logo",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mobilePhone",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "qualityStatement",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "setupName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "tagLine",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaggardCounts",
        "fields": [
          {
            "name": "graterThanThirty",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lessThanTen",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "tenToTwenty",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "totalDelayed",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "totalIncomplete",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "totalNotDelayed",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "twentyToThirty",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaggardData",
        "fields": [
          {
            "name": "category",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "counts",
            "type": {
              "kind": "OBJECT",
              "name": "LaggardCounts",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaggardStatistics",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "LaggardData",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ManufacturerResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ManufacturerType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ManufacturerType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "MessageResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "MessagesType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MessageThreadType",
        "fields": [
          {
            "name": "broadcast",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "deletedBy",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "messages",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MessageType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "recipients",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MessageType",
        "fields": [
          {
            "name": "body",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "deletedBy",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "left",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "parent",
            "type": {
              "kind": "OBJECT",
              "name": "MessageType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "parentId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "right",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "thread",
            "type": {
              "kind": "OBJECT",
              "name": "MessageThreadType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "threadUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "viewers",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserType",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MessagesType",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MethodCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MethodEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MethodType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MethodEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MethodType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "MethodResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "MethodType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MethodType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "instruments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "InstrumentType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "keyword",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "actionShipment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ShipmentResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "action",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "actionWorksheets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "WorkSheetsResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "action",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uids",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "applyVoucher",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "TestBillTransactionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "approveStockOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockOrderResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "authenticateUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AuthenticatedDataResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "username",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "cancelAnalysisResults",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisResultResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "analyses",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "cancelSamples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ResultedSampleActionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "samples",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "cloneSamples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SampleActionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "samples",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "confirmTestBillTransaction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "TestBillTransactionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "notes",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createAnalysis",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ProfilesServiceResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createAnalysisCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisCategoryResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createAnalysisCorrectionFactor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisCorrectionFactorResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createAnalysisDetectionLimit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisDetectionLimitResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createAnalysisInterim",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisInterimResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createAnalysisMapping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisMappingResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createAnalysisRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisRequestResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createAnalysisSpecification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisSpecificationResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createAnalysisTemplate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisTemplateResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createAnalysisUncertainty",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisUncertaintyResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createCaliberationCertificate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CalibrationCertificateResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createClient",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ClientResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createClientContact",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ClientContactResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createCodingStandard",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CodingStandardResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createCountry",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CountryResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createDepartment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DepartmentResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createDistrict",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DistrictResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "GroupResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createHazard",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "HazardResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createIdentification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "IdentificationResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createInstrument",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "InstrumentResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createInstrumentCaliberation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "InstrumentCalibrationResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createInstrumentCompetence",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "InstrumentCompetenceResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createInstrumentType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "InstrumentTypeResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createLaboratoryInstrument",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "LaboratoryInstrumentResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createManufacturer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ManufacturerResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MethodResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createNotice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "NoticeResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createPatient",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "PatientResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createProfile",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisProfileResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createProfileMapping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ProfileMappingResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createProvince",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ProvinceResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createQcLevel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "QCLevelResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "level",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createQcSet",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "QCSetResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "samples",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "createQcTemplate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "QCTemplateResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createReferralLaboratory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ReferralLaboratoryResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createReflexAction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ReflexActionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createReflexBrain",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ReflexBrainResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createReflexRule",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ReflexRuleResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createRejectionReason",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RejectionReasonResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "reason",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createResultOption",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ResultOptionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createSampleType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SampleTypeResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createSampleTypeMapping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SampleTypeMappingResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createShipment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ShipmentsResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createStockAdjustment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockAdjustmentResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createStockCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockCategoryResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createStockItem",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockItemResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createStockItemVariant",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockItemVariantResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stockItemUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createStockOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockOrderResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createStockReceipt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockItemVariantResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createStockUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockUnitResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createStorageContainer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StorageContainerResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createStorageLocation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StorageLocationResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createStorageSection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StorageSectionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createStoreRoom",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StoreRoomResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createSupplier",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SupplierResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createTestBillTransaction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "TestBillTransactionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UnitResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UserResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "firstName",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "groupUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "lastName",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "openReg",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "passwordc",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "userName",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createVoucher",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "VoucherResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createVoucherCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "VoucherCodeResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createWorksheet",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "WorkSheetsResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "analystUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "count",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "templateUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createWorksheetTemplate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "WorkSheetTemplateResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteClientContact",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DeleteContactResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteMessage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DeleteResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteNotice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DeleteResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteReflexBrain",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletedItem",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteStockOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockOrderResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteThread",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DeleteResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "invalidateSamples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SampleActionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "samples",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "issueStockOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockOrderResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "manageAnalyses",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ResultedSampleActionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "sampleUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "printSamples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SampleActionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "samples",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "publishSamples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SuccessErrorResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "samples",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "reInstateAnalysisResults",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisResultResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "analyses",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "reInstateSamples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ResultedSampleActionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "samples",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "receiveSamples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ResultedSampleActionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "samples",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "recoverSamples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StoreSampleResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "sampleUids",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "refresh",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AuthenticatedDataResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "refreshToken",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "rejectSamples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SampleActionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "samples",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "replyMessage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MessageResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "body",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "threadUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "requestPasswordReset",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MessageResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "resetPassword",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MessageResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "passwordc",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "userUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "retestAnalysisResults",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisResultResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "analyses",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "retractAnalysisResults",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisResultResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "analyses",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "samplesApplyTemplate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ResultedSampleActionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "analysisTemplateUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "sendMessage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MessageResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "body",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "recipients",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "shipmentManageSamples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ShipmentResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "storeSamples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StoreSampleResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "submitAnalysisResults",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisResultSubmitResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "analysisResults",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "sourceObject",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "sourceObjectUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "submitStockOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockOrderResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAnalysis",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ProfilesServiceResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAnalysisCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisCategoryResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAnalysisCorrectionFactor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisCorrectionFactorResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAnalysisDetectionLimit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisDetectionLimitResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAnalysisDiscount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisDiscountResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAnalysisInterim",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisInterimResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAnalysisMapping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisMappingResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAnalysisPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisPriceResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAnalysisSpecification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisSpecificationResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAnalysisTemplate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisTemplateResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAnalysisUncertainty",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisUncertaintyResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateCaliberationCertificate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CalibrationCertificateResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateClient",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ClientResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateClientContact",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ClientContactResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateCodingStandard",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CodingStandardResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateCountry",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CountryResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateDepartment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DepartmentResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateDistrict",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DistrictResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "GroupResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateGroupPermissions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdatedGroupPermsResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "groupUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "permissionUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateHazard",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "HazardResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateIdentification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "IdentificationResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateInstrument",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "InstrumentResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateInstrumentCaliberation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "InstrumentCalibrationResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateInstrumentCompetence",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "InstrumentCompetenceResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateInstrumentType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "InstrumentTypeResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateLaboratory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "LaboratoryResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateLaboratoryInstrument",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "LaboratoryInstrumentResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateLaboratorySetting",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "LaboratorySettingResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManufacturer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ManufacturerResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MethodResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateNotice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "NoticeResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updatePatient",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "PatientResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateProfile",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisProfileResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateProfileDiscount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ProfileDiscountResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateProfileMapping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ProfileMappingResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateProfilePrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ProfilePriceResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateProvince",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ProvinceResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateQcLevel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "QCLevelResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "level",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateQcTemplate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "QCTemplateResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateReferralLaboratory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ReferralLaboratoryResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateReflexAction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ReflexActionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateReflexBrain",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ReflexBrainResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateReflexRule",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ReflexRuleResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateRejectionReason",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RejectionReasonResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "reason",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateResultOption",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ResultOptionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateSampleType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SampleTypeResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateSampleTypeMapping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SampleTypeMappingResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateShipment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ShipmentResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateStockCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockCategoryResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateStockItem",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockItemResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateStockItemVariant",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockItemVariantResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateStockOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockOrderResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateStockUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StockUnitResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateStorageContainer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StorageContainerResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateStorageLocation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StorageLocationResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateStorageSection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StorageSectionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateStoreRoom",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "StoreRoomResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateSupplier",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SupplierResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UnitResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UserResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "email",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "firstName",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "groupUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "isActive",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "lastName",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "mobilePhone",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "password",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "passwordc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "userUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateVoucher",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "VoucherResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateVoucherCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "VoucherCodeResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateWorksheet",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "WorkSheetResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "action",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "analystUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "instrumentUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "methodUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "samples",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "worksheetUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateWorksheetApplyTemplate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "WorkSheetResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "templateUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "worksheetUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateWorksheetManualAssign",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "WorkSheetResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "analysesUids",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "qcTemplateUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateWorksheetTemplate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "WorkSheetTemplateResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "payload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "validatePasswordResetToken",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "PasswordResetValidityResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "token",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "verifyAnalysisResults",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AnalysisResultSubmitResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "analyses",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "sourceObject",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "sourceObjectUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "verifySamples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SampleActionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "samples",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "viewMessage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MessageResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "viewNotice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "NoticeType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "viewer",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Nothing",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "NoticeResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "NoticeType"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NoticeType",
        "fields": [
          {
            "name": "body",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "departments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "DepartmentType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "expiry",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "groups",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "GroupType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "viewers",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserType",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "NotificationType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "departments",
            "type": {
              "kind": "OBJECT",
              "name": "DepartmentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "groups",
            "type": {
              "kind": "OBJECT",
              "name": "GroupType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "users",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "viewers",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "OperationError",
        "fields": [
          {
            "name": "error",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "suggestion",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "OperationSuccess",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageInfo",
        "fields": [
          {
            "name": "endCursor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hasNextPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "hasPreviousPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "startCursor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "PasswordResetValidityResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "PasswordResetValidityType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PasswordResetValidityType",
        "fields": [
          {
            "name": "authUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PatientCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PatientEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PatientType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PatientEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PatientType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PatientIdentificationType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "identification",
            "type": {
              "kind": "OBJECT",
              "name": "IdentificationType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "identificationUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "patientUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "PatientResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "PatientType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PatientType",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "age",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ageDobEstimated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "client",
            "type": {
              "kind": "OBJECT",
              "name": "ClientType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "clientPatientId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "clientUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "consentSms",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "country",
            "type": {
              "kind": "OBJECT",
              "name": "CountryType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "countryUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateOfBirth",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "district",
            "type": {
              "kind": "OBJECT",
              "name": "DistrictType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "districtUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "firstName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "gender",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "identifications",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PatientIdentificationType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "internalUse",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lastName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "metadataSnapshot",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "middleName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "patientId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "phoneHome",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "phoneMobile",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "province",
            "type": {
              "kind": "OBJECT",
              "name": "ProvinceType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "provinceUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PermissionType",
        "fields": [
          {
            "name": "action",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "active",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "target",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProcessCounts",
        "fields": [
          {
            "name": "avgExtraDays",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "processAverage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "service",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "totalLate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "totalNotLate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "totalSamples",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProcessData",
        "fields": [
          {
            "name": "counts",
            "type": {
              "kind": "OBJECT",
              "name": "ProcessCounts",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "groups",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProcessCounts",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "process",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProcessStatistics",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProcessData",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ProfileDiscountResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ProfileDiscountType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProfileDiscountType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "discountType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "endDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "profile",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProfileType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "profileUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "startDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "valueAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "valuePercent",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "valueType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "voucher",
            "type": {
              "kind": "OBJECT",
              "name": "VoucherType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "voucherUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ProfileMappingResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ProfileMappingType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProfileMappingType",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "codingStandard",
            "type": {
              "kind": "OBJECT",
              "name": "CodingStandardType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "codingStandardUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "profile",
            "type": {
              "kind": "OBJECT",
              "name": "ProfileType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "profileUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ProfilePriceResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ProfilePriceType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProfilePriceType",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "profile",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProfileType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "profileUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProfileType",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "analyses",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "department",
            "type": {
              "kind": "OBJECT",
              "name": "DepartmentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "departmentUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "keyword",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "sampleTypes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SampleTypeTyp",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "tatLengthMinutes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ProfilesServiceResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalysisWithProfiles"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProvinceCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProvinceEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProvinceType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProvinceEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProvinceType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ProvinceResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ProvinceType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProvinceType",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "businessPhone",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "country",
            "type": {
              "kind": "OBJECT",
              "name": "CountryType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "countryUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "emailCc",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mobilePhone",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "QCLevelResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "QCLevelType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "QCLevelType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "level",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "QCSetCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "QCSetEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "QCSetWithSamples",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "QCSetEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "QCSetWithSamples",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "QCSetResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CreateQCSetData"
          },
          {
            "kind": "OBJECT",
            "name": "OperationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "QCSetType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "note",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "QCSetWithSamples",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "note",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "samples",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SamplesWithResults",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "QCTemplateResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "QCTemplateType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "QCTemplateType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "departments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DepartmentType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "qcLevels",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "QCLevelType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "analysisAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "qcOnly",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "analysisByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisCategoryAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AnalysisCategoryType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "analysisCategoryByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisCategoryType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisCorrectionFactorAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AnalysisCorrectionFactorType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "analysisCorrectionFactorByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisCorrectionFactorType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisDetectionLimitAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AnalysisDetectionLimitType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "analysisDetectionLimitByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisDetectionLimitType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisInterimAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AnalysisInterimType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "analysisInterimByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisInterimType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisMappingsByAnalysis",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AnalysisMappingType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "analysisUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisProcessPerformance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProcessStatistics",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "endDate",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "process",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "startDate",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisRequestAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisRequestCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "analysisRequestByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisRequestWithSamples",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisRequestsByClientUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AnalysisRequestWithSamples",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisRequestsByPatientUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AnalysisRequestWithSamples",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisResultBySampleUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AnalysisResultType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisResultByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisResultType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisResultsForWsAssign",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisResultCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "analysisUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sampleTypeUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "analysisSpecificationAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AnalysisSpecificationType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "analysisSpecificationUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisSpecificationType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisTemplateAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AnalysisTemplateType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "analysisTemplateByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisTemplateType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisUncertaintyAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AnalysisUncertaintyType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "analysisUncertaintyByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalysisUncertaintyType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "analysisWithoutProfile",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AnalysisType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "auditLogsFilter",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AuditLogType",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "targetType",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "targetUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "barcodeSamples",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            },
            "args": [
              {
                "name": "sampleUids",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "billByUid",
            "type": {
              "kind": "OBJECT",
              "name": "TestBillType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "billInvoice",
            "type": {
              "kind": "OBJECT",
              "name": "TestBillInvoiceType",
              "ofType": null
            },
            "args": [
              {
                "name": "invoiceUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "billInvoiceCreate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": [
              {
                "name": "billUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "billInvoices",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TestBillInvoiceType",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "billUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "billTransactions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TestBillTransactionType",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "billUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "bills",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TestBillCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "clientUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "isActive",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "partial",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "billsForClient",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TestBillType",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "clientUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "billsForPatient",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TestBillType",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "patientUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "clientAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ClientCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "clientByCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ClientType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "code",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "clientByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ClientType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "clientContactAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ClientContactType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "clientContactByClientUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ClientContactType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "clientUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "clientContactUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ClientContactType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "clientSearch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ClientType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "queryString",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "clientsByName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ClientType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "codingStandardAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CodingStandardType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "countAnalyteGroupByInstrument",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GroupedCounts",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "endDate",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "startDate",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "countAnalyteGroupByStatus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GroupedCounts",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "countExtrasGroupByStatus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GroupedCounts",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "countSampleGroupByAction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GroupedData",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "endDate",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "startDate",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "countSampleGroupByStatus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GroupedCounts",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "countWorksheetGroupByStatus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GroupedCounts",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "countryAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CountryType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "countryByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CountryType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "departmentAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DepartmentType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "departmentByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DepartmentType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "discountForAnalysis",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisDiscountType",
              "ofType": null
            },
            "args": [
              {
                "name": "analysisUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "discountForProfile",
            "type": {
              "kind": "OBJECT",
              "name": "ProfileDiscountType",
              "ofType": null
            },
            "args": [
              {
                "name": "profileUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "districtAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DistrictCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "districtByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DistrictType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "districtsByProvinceUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DistrictType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "groupAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "GroupType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "groupByUid",
            "type": {
              "kind": "OBJECT",
              "name": "GroupType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "hazardAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "HazardType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hazardByUid",
            "type": {
              "kind": "OBJECT",
              "name": "HazardType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "identificationAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "IdentificationType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "identificationByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "IdentificationType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "impressReportDownload",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "impressReportsDownload",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": [
              {
                "name": "sampleIds",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "impressReportsMeta",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReportImpressType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "uids",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "instrumentAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "InstrumentCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "instrumentByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "InstrumentType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "instrumentTypeAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "InstrumentTypeCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "instrumentTypeByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "InstrumentTypeType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "laboratory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LaboratoryType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "setupName",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "laboratoryInstrumentAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LaboratoryInstrumentCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "laboratoryInstrumentByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LaboratoryInstrumentType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "laboratorySetting",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LaboratorySettingType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "setupName",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "manifestReportDownload",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "manufacturerAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ManufacturerType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "manufacturerByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ManufacturerType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "methodAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MethodCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "methodByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MethodType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "noticeByUid",
            "type": {
              "kind": "OBJECT",
              "name": "NoticeType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "noticeFilter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "NoticeType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "departmentUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "groupUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "noticesByCreator",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "NoticeType",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "notificationByUid",
            "type": {
              "kind": "OBJECT",
              "name": "NotificationType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "notificationFilter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "NotificationType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "departmentUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "groupUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "userUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "patientAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PatientCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "patientByPatientId",
            "type": {
              "kind": "OBJECT",
              "name": "PatientType",
              "ofType": null
            },
            "args": [
              {
                "name": "patientId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "patientByUid",
            "type": {
              "kind": "OBJECT",
              "name": "PatientType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "patientSearch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PatientType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "queryString",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "permissionAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PermissionType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "permissionByUid",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "priceForAnalysis",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisPriceType",
              "ofType": null
            },
            "args": [
              {
                "name": "analysisUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "priceForProfile",
            "type": {
              "kind": "OBJECT",
              "name": "ProfilePriceType",
              "ofType": null
            },
            "args": [
              {
                "name": "profileUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "profileAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProfileType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "profileByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProfileType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "profileMappingsByProfile",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProfileMappingType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "profileUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "provinceAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProvinceCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "provinceByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProvinceType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "provincesByCountryUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProvinceType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "qcLevelAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "QCLevelType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "qcLevelByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "QCLevelType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "qcSetAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "QCSetCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "qcSetByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "QCSetWithSamples",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "qcTemplateAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "QCTemplateType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "qcTemplateByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "QCTemplateType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "referralLaboratoryAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReferralLaboratoryType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "referralLaboratoryByCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ReferralLaboratoryType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "code",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "referralLaboratoryByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ReferralLaboratoryType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "reflexRuleAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ReflexRuleCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "reflexRuleByUid",
            "type": {
              "kind": "OBJECT",
              "name": "ReflexRuleType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "rejectionReasonByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RejectionReasonType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "rejectionReasonsAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RejectionReasonType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "resultMutationByResultUid",
            "type": {
              "kind": "OBJECT",
              "name": "ResultMutationType",
              "ofType": null
            },
            "args": [
              {
                "name": "resultUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "resultOptionsByAnalysisUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ResultOptionType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "sampleAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SampleCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "clientUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "status",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "sampleByParentId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SampleType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "parentId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "sampleByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SampleType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "sampleCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "clientUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "status",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "sampleLaggards",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LaggardStatistics",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sampleProcessPerformance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProcessStatistics",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "endDate",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "startDate",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "sampleSearch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SampleType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "clientUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "status",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "sampleTypeAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SampleTypeTyp",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "sampleTypeByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SampleTypeTyp",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "sampleTypeMappingsBySampleType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SampleTypeMappingType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "sampleTypeUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "samplesByStorageContainerUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SampleType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "samplesByUids",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SamplesWithResults",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "sampleUids",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "samplesForShipmentAssign",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SampleCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "analysisUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sampleTypeUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "shipmentAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ShipmentCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "incoming",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "status",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "shipmentById",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ShipmentType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "shipmentId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "shipmentByStatus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ShipmentType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "shipmentStatus",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "shipmentByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ShipmentType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "shipmentUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "stockAdjustmentAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockAdjustmentCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "productUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "stockAdjustmentByUid",
            "type": {
              "kind": "OBJECT",
              "name": "StockAdjustmentType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "stockCategoryAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StockCategoryType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "stockCategoryByUid",
            "type": {
              "kind": "OBJECT",
              "name": "StockCategoryType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "stockItemAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockItemCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "stockItemByUid",
            "type": {
              "kind": "OBJECT",
              "name": "StockItemType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "stockItemVariants",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StockItemVariantType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "stockItemUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "stockLots",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StockLotType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "productUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "stockOrderAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockOrderCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "status",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "stockOrderByUid",
            "type": {
              "kind": "OBJECT",
              "name": "StockOrderType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "stockOrderProductAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StockOrderProductType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "stockOrderUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "stockOrderProductByUid",
            "type": {
              "kind": "OBJECT",
              "name": "StockOrderProductType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "stockProductAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockItemVariantCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "stockProductByUid",
            "type": {
              "kind": "OBJECT",
              "name": "StockItemVariantType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "stockProductInventory",
            "type": {
              "kind": "OBJECT",
              "name": "StockProductInventoryType",
              "ofType": null
            },
            "args": [
              {
                "name": "productUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stockLotUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "stockReceipt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StockReceiptType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "productUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stockLotUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "stockUnitAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StockUnitType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "stockUnitByUid",
            "type": {
              "kind": "OBJECT",
              "name": "StockUnitType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "storageContainerByUid",
            "type": {
              "kind": "OBJECT",
              "name": "StorageContainerType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "storageContainers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StorageContainerType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "storageSectionUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "storageLocationByUid",
            "type": {
              "kind": "OBJECT",
              "name": "StorageLocationType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "storageLocations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StorageLocationType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "storeRoomUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "storageSectionByUid",
            "type": {
              "kind": "OBJECT",
              "name": "StorageSectionType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "storageSections",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StorageSectionType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "storageLocationUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "storeRoomAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StoreRoomType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "storeRoomByUid",
            "type": {
              "kind": "OBJECT",
              "name": "StoreRoomType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "supplierAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SupplierType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "supplierByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SupplierType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "threadByUid",
            "type": {
              "kind": "OBJECT",
              "name": "MessageThreadType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "threadsForUser",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MessageThreadType",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "unitAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UnitType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "unitByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UnitType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "userByEmail",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": [
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userMe",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": [
              {
                "name": "token",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "voucherAll",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "VoucherType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "voucherByUid",
            "type": {
              "kind": "OBJECT",
              "name": "VoucherType",
              "ofType": null
            },
            "args": [
              {
                "name": "uid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "voucherCodes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "VoucherCodeType",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "voucherUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "worksheetAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "WorkSheetCursorPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "afterCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "beforeCursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pageSize",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "status",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "worksheetByAnalyst",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "WorkSheetType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "analystUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "worksheetById",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "WorkSheetType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "worksheetId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "worksheetByStatus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "WorkSheetType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "worksheetStatus",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "worksheetByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "WorkSheetType",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "worksheetUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "worksheetTemplateAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "WorkSheetTemplateType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "worksheetTemplateByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "WorkSheetType",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "worksheetUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ReferralLaboratoryResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ReferralLaboratoryType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ReferralLaboratoryType",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isReference",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isReferral",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ReflexActionResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ReflexActionType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ReflexActionType",
        "fields": [
          {
            "name": "analyses",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "brains",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReflexBrainType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "level",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reflexRule",
            "type": {
              "kind": "OBJECT",
              "name": "ReflexRuleType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "reflexRuleUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "sampleType",
            "type": {
              "kind": "OBJECT",
              "name": "SampleTypeTyp",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sampleTypeUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReflexBrainActionType",
        "fields": [
          {
            "name": "addNew",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReflexBrainAdditionType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "finalise",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReflexBrainFinalType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "priority",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reflexBrain",
            "type": {
              "kind": "OBJECT",
              "name": "ReflexBrainType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "reflexBrainUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReflexBrainAdditionType",
        "fields": [
          {
            "name": "analysis",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "analysisUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reflexBrainAction",
            "type": {
              "kind": "OBJECT",
              "name": "ReflexBrainActionType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "reflexBrainActionUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReflexBrainConditionCriteriaType",
        "fields": [
          {
            "name": "analysis",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "analysisUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "operator",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reflexBrainCondition",
            "type": {
              "kind": "OBJECT",
              "name": "ReflexBrainConditionType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "reflexBrainConditionUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReflexBrainConditionType",
        "fields": [
          {
            "name": "criteria",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReflexBrainConditionCriteriaType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "priority",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reflexBrain",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ReflexBrainType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "reflexBrainUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReflexBrainFinalType",
        "fields": [
          {
            "name": "analysis",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "analysisUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reflexBrainAction",
            "type": {
              "kind": "OBJECT",
              "name": "ReflexBrainActionType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "reflexBrainActionUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ReflexBrainResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ReflexBrainType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ReflexBrainType",
        "fields": [
          {
            "name": "actions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReflexBrainActionType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "conditions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReflexBrainConditionType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "priority",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reflexAction",
            "type": {
              "kind": "OBJECT",
              "name": "ReflexBrainType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "reflexActionUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReflexRuleCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReflexRuleEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReflexRuleType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReflexRuleEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ReflexRuleType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ReflexRuleResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ReflexRuleType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ReflexRuleType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "priority",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reflexActions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReflexActionType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "RejectionReasonResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "RejectionReasonType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RejectionReasonType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reason",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReportImpressType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "emailRequired",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "emailSent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "generatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "generatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "jsonContent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sample",
            "type": {
              "kind": "OBJECT",
              "name": "SampleType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sampleUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "smsRequired",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "smsSent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "state",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReportMetaType",
        "fields": [
          {
            "name": "analyses",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateColumn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "location",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "periodEnd",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "periodStart",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reportType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "sampleStates",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "temp",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ResultListingType",
        "fields": [
          {
            "name": "results",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AnalysisResultType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ResultMutationType",
        "fields": [
          {
            "name": "after",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "before",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "date",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mutation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "resultUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ResultOptionResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ResultOptionType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ResultOptionType",
        "fields": [
          {
            "name": "analysisUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "optionKey",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "sampleTypes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SampleTypeTyp",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ResultedSampleActionResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ResultedSampleListingType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ResultedSampleListingType",
        "fields": [
          {
            "name": "samples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SamplesWithResults",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "SampleActionResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "SampleListingType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SampleCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SampleEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SamplesWithResults",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SampleEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SamplesWithResults",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SampleListingType",
        "fields": [
          {
            "name": "samples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SampleType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SampleType",
        "fields": [
          {
            "name": "analyses",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "analysisRequest",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisRequestType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "analysisRequestUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "assigned",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "cancelledBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "cancelledByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateCancelled",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateCollected",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateInvalidated",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "datePrinted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "datePublished",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateReceived",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateRetrievedFromStorage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateStored",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateSubmitted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateVerified",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dueDate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "internalUse",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "invalidatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "invalidatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "metadataSnapshot",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "parent",
            "type": {
              "kind": "OBJECT",
              "name": "SampleType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "parentId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "printed",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "printedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "printedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "priority",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "profiles",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProfileType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "publishedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "publishedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "qcLevel",
            "type": {
              "kind": "OBJECT",
              "name": "QCLevelType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "qcLevelUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "qcSet",
            "type": {
              "kind": "OBJECT",
              "name": "QCSetType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "qcSetUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "receivedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "receivedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rejectionReasons",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RejectionReasonType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "sampleId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "sampleType",
            "type": {
              "kind": "OBJECT",
              "name": "SampleTypeTyp",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sampleTypeUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "storageContainer",
            "type": {
              "kind": "OBJECT",
              "name": "StorageContainerType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "storageContainerUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "storageSlot",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "storageSlotIndex",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "storedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "storedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "submittedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "submittedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "verifiedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "verifiedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "SampleTypeMappingResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "SampleTypeMappingType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SampleTypeMappingType",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "codingStandard",
            "type": {
              "kind": "OBJECT",
              "name": "CodingStandardType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "codingStandardUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sampleType",
            "type": {
              "kind": "OBJECT",
              "name": "SampleTypeTyp",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sampleTypeUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "SampleTypeResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "SampleTypeTyp"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SampleTypeTyp",
        "fields": [
          {
            "name": "abbr",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "active",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "internalUse",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SamplesWithResults",
        "fields": [
          {
            "name": "analyses",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "analysisRequest",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisRequestType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "analysisRequestUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "analysisResults",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisResultType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "assigned",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "cancelledBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "cancelledByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateCancelled",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateCollected",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateInvalidated",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "datePrinted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "datePublished",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateReceived",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateRetrievedFromStorage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateStored",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateSubmitted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateVerified",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dueDate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "internalUse",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "invalidatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "invalidatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "metadataSnapshot",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "parent",
            "type": {
              "kind": "OBJECT",
              "name": "SampleType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "parentId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "printed",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "printedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "printedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "priority",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "profiles",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProfileType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "publishedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "publishedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "qcLevel",
            "type": {
              "kind": "OBJECT",
              "name": "QCLevelType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "qcLevelUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "qcSet",
            "type": {
              "kind": "OBJECT",
              "name": "QCSetType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "qcSetUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "receivedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "receivedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rejectionReasons",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RejectionReasonType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "sampleId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "sampleType",
            "type": {
              "kind": "OBJECT",
              "name": "SampleTypeTyp",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sampleTypeUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "storageContainer",
            "type": {
              "kind": "OBJECT",
              "name": "StorageContainerType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "storageContainerUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "storageSlot",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "storageSlotIndex",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "storedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "storedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "submittedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "submittedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "verifiedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "verifiedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ShipmentCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ShipmentEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ShipmentType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ShipmentEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ShipmentType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ShipmentListingType",
        "fields": [
          {
            "name": "shipments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ShipmentType",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ShipmentResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ShipmentType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ShipmentType",
        "fields": [
          {
            "name": "assignedCount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "comment",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "courier",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "data",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateDispatched",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateFinalised",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateRecalled",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateReceived",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateRejected",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dispatchedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "dispatchedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "finalisedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "finalisedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "incoming",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "jsonContent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "laboratory",
            "type": {
              "kind": "OBJECT",
              "name": "ReferralLaboratoryType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "laboratoryUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pdfContent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "recalledBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "recalledByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "receivedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "receivedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rejectedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "rejectedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "samples",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SampleType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "shipmentId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "shippedSamples",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ShippedSampleType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "state",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ShipmentsResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "ShipmentListingType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ShippedSampleType",
        "fields": [
          {
            "name": "extSampleId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "extSampleUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "resultNotified",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sample",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SampleType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sampleUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "shipment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ShipmentType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "shipmentUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockAdjustmentCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StockAdjustmentEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StockAdjustmentType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockAdjustmentEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockAdjustmentType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "StockAdjustmentResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "StockAdjustmentType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StockAdjustmentType",
        "fields": [
          {
            "name": "adjust",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "adjustmentBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "adjustmentByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "adjustmentDate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "adjustmentFor",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "adjustmentForUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "adjustmentType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "product",
            "type": {
              "kind": "OBJECT",
              "name": "StockItemVariantType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "productUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "remarks",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "stockLot",
            "type": {
              "kind": "OBJECT",
              "name": "StockLotType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stockLotUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "StockCategoryResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "StockCategoryType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StockCategoryType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockItemCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StockItemEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StockItemType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockItemEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockItemType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "StockItemResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "StockItemType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StockItemType",
        "fields": [
          {
            "name": "category",
            "type": {
              "kind": "OBJECT",
              "name": "StockCategoryType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "categoryUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hazard",
            "type": {
              "kind": "OBJECT",
              "name": "HazardType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "hazardUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "maximumLevel",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "minimumLevel",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "variants",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StockItemVariantType",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockItemVariantCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StockItemVariantType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StockItemVariantType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockItemVariantEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockItemVariantType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "StockItemVariantResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "StockItemVariantType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StockItemVariantType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "maximumLevel",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "minimumLevel",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "stockItem",
            "type": {
              "kind": "OBJECT",
              "name": "StockItemType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stockItemUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockLotType",
        "fields": [
          {
            "name": "expiryDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lotNumber",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "product",
            "type": {
              "kind": "OBJECT",
              "name": "StockItemVariantType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "productUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "remarks",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockOrderCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StockOrderEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StockOrderType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockOrderEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockOrderType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockOrderLineType",
        "fields": [
          {
            "name": "orderProducts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StockOrderProductType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "stockOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockOrderType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockOrderProductType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "order",
            "type": {
              "kind": "OBJECT",
              "name": "StockOrderType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "orderUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "product",
            "type": {
              "kind": "OBJECT",
              "name": "StockItemVariantType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "productUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "stockLot",
            "type": {
              "kind": "OBJECT",
              "name": "StockLotType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stockLotUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "StockOrderResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "StockOrderLineType"
          },
          {
            "kind": "OBJECT",
            "name": "StockOrderType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StockOrderType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "department",
            "type": {
              "kind": "OBJECT",
              "name": "DepartmentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "departmentUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "fulfilledBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "fulfilledByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "orderBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "orderByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "orderNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "remarks",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockPackagingType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockProductInventoryType",
        "fields": [
          {
            "name": "product",
            "type": {
              "kind": "OBJECT",
              "name": "StockItemVariantType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "productUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "remarks",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "stockLot",
            "type": {
              "kind": "OBJECT",
              "name": "StockLotType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stockLotUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockReceiptType",
        "fields": [
          {
            "name": "packageFactor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "packagesReceived",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "product",
            "type": {
              "kind": "OBJECT",
              "name": "StockItemVariantType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "productUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "quantityReceived",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "receiptBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "receiptByUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "receiptDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "receiptType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "singlesReceived",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "stockLot",
            "type": {
              "kind": "OBJECT",
              "name": "StockLotType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stockLotUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "supplier",
            "type": {
              "kind": "OBJECT",
              "name": "SupplierType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "supplierUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "totalPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "unit",
            "type": {
              "kind": "OBJECT",
              "name": "StockUnitType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "unitPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "unitUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockTransactionCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StockTransactionEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StockTransactionType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockTransactionEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockTransactionType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StockTransactionType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateIssued",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "department",
            "type": {
              "kind": "OBJECT",
              "name": "DepartmentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "departmentUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "issued",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "issuedTo",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "issuedToUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "product",
            "type": {
              "kind": "OBJECT",
              "name": "StockItemVariantType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "productUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "transactionBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "transactionByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "StockUnitResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "StockUnitType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StockUnitType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "synonyms",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "StorageContainerResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "StorageContainerType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StorageContainerType",
        "fields": [
          {
            "name": "cols",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "grid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "rowWise",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rows",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "slots",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "storageSection",
            "type": {
              "kind": "OBJECT",
              "name": "StorageSectionType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "storageSectionUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "storedCount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "tag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "StorageLocationResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "StorageLocationType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StorageLocationType",
        "fields": [
          {
            "name": "children",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StorageSectionType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "storeRoom",
            "type": {
              "kind": "OBJECT",
              "name": "StoreRoomType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "storeRoomUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "tag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "StorageSectionResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "StorageSectionType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StorageSectionType",
        "fields": [
          {
            "name": "children",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StorageContainerType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "storageLocation",
            "type": {
              "kind": "OBJECT",
              "name": "StorageLocationType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "storageLocationUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "tag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "StoreRoomResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "StoreRoomType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StoreRoomType",
        "fields": [
          {
            "name": "children",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StorageLocationType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "tag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "StoreSampleResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "StoredSamplesType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StoredSamplesType",
        "fields": [
          {
            "name": "samples",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SampleType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Subscription",
        "fields": [
          {
            "name": "latestActivity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ActivityStreamType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "streamAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ActivityStreamType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "streamProcesses",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ActivityProcessType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "SuccessErrorResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "OperationSuccess"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SupplierResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "SupplierType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SupplierType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TestBillCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TestBillEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TestBillType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TestBillEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TestBillType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TestBillInvoiceType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "jsonContent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pdfContent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "testBill",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TestBillType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "testBillUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "TestBillTransactionResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "TestBillTransactionType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TestBillTransactionType",
        "fields": [
          {
            "name": "actionMessage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "actionRequired",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isSuccess",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "kind",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "notes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "processed",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "testBill",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TestBillType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "testBillUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TestBillType",
        "fields": [
          {
            "name": "billId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "client",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ClientType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "clientUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "jsonContent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "orders",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisRequestType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "partial",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "patient",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PatientType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "patientUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "toConfirm",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "totalCharged",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "totalPaid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "UnitResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "UnitType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UnitType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UnknownObjectType",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdatedGroupPerms",
        "fields": [
          {
            "name": "group",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GroupType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "permission",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PermissionType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "UpdatedGroupPermsResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdatedGroupPerms"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UserCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserPreferenceType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserPreferenceType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "departments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "DepartmentType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "expandedMenu",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "theme",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserPreferenceType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "UserResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "UserType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UserType",
        "fields": [
          {
            "name": "avatar",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "bio",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "businessPhone",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultRoute",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "firstName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "groups",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "GroupType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isBlocked",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isSuperuser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lastName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "loginRetry",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "mobilePhone",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "preference",
            "type": {
              "kind": "OBJECT",
              "name": "UserPreferenceType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "VoucherCodeResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "VoucherCodeType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "VoucherCodeType",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "usageLimit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "used",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "voucher",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "VoucherType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "voucherUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "VoucherCustomerType",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "patient",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PatientType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "patientUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "voucherCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "VoucherCodeType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "voucherCodeUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "VoucherResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "VoucherType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "VoucherType",
        "fields": [
          {
            "name": "codes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "VoucherCodeType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "endDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "oncePerCustomer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "oncePerOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "startDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "usageLimit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "used",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "WorkSheetCursorPage",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "WorkSheetEdge",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "WorkSheetType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "WorkSheetEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "WorkSheetType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "WorkSheetResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "WorkSheetType"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "WorkSheetTemplateResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "WorkSheetTemplateType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "WorkSheetTemplateType",
        "fields": [
          {
            "name": "analysis",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "analysisUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "cols",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "instrument",
            "type": {
              "kind": "OBJECT",
              "name": "InstrumentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "instrumentUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "numberOfSamples",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "qcLevels",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "QCLevelType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "qcTemplate",
            "type": {
              "kind": "OBJECT",
              "name": "QCTemplateType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "qcTemplateUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reserved",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rowWise",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "rows",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sampleType",
            "type": {
              "kind": "OBJECT",
              "name": "SampleTypeTyp",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sampleTypeUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "state",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "worksheetType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "WorkSheetType",
        "fields": [
          {
            "name": "analysis",
            "type": {
              "kind": "OBJECT",
              "name": "AnalysisType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "analysisResults",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AnalysisResultType",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "analysisUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "analyst",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "analystUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "assignedCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "cols",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateSubmitted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dateVerified",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "instrument",
            "type": {
              "kind": "OBJECT",
              "name": "InstrumentType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "instrumentUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "numberOfSamples",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reserved",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rowWise",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "rows",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sampleType",
            "type": {
              "kind": "OBJECT",
              "name": "SampleTypeTyp",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sampleTypeUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "state",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "submittedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "submittedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "template",
            "type": {
              "kind": "OBJECT",
              "name": "WorkSheetTemplateType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "templateUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "verifiedBy",
            "type": {
              "kind": "OBJECT",
              "name": "UserType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "verifiedByUid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "worksheetId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "worksheetType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "WorkSheetTypeSampleTypeAnalysisResultTypeReportMetaTypeUnknownObjectType",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalysisResultType"
          },
          {
            "kind": "OBJECT",
            "name": "ReportMetaType"
          },
          {
            "kind": "OBJECT",
            "name": "SampleType"
          },
          {
            "kind": "OBJECT",
            "name": "UnknownObjectType"
          },
          {
            "kind": "OBJECT",
            "name": "WorkSheetType"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "WorkSheetsResponse",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OperationError"
          },
          {
            "kind": "OBJECT",
            "name": "WorksheetListingType"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "WorksheetListingType",
        "fields": [
          {
            "name": "worksheets",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "WorkSheetType",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;