export const data = {
    "initialQuestionKey": "DISMISSAL_RECEIVED",
    "questions": [
      {
        "key": "DISMISSAL_RECEIVED",
        "message": "Have you received a dismissal in writing?",
        "input": {
          "type": "select",
          "choices": [
            {
              "key": "YES",
              "text": "Yes"
            },
            {
              "key": "NO",
              "text": "No"
            }
          ]
        },
        "next": [
          {
            "conditions": [
              {
                "operator": "equal",
                "value": "NO"
              }
            ],
            "key": "EXIT"
          },
          {
            "conditions": [
              {
                "operator": "equal",
                "value": "YES"
              }
            ],
            "key": "NUMBER_EMPLOYEES"
          }
        ]
      },
      {
        "key": "NUMBER_EMPLOYEES",
        "message": "How many employees work in your company?",
        "input": {
          "type": "select",
          "choices": [
            {
              "key": "UNDER_TEN_EMPLOYEES",
              "text": "Fewer than 10 employees"
            },
            {
              "key": "OVER_TEN_EMPLOYEES",
              "text": "More than 10 employees"
            }
          ]
        },
        "next": [
          {
            "conditions": [
              {
                "operator": "equal",
                "value": "UNDER_TEN_EMPLOYEES"
              }
            ],
            "key": "EXIT"
          },
          {
            "conditions": [
              {
                "operator": "equal",
                "value": "OVER_TEN_EMPLOYEES"
              }
            ],
            "key": "SUCCESS"
          }
        ]
      },
      {
        "key": "EXIT",
        "message": "Bad case",
        "final": true
      },
      {
        "key": "SUCCESS",
        "message": "Good case",
        "final": true
      }
    ]
  }