# Contract Testing vs Schema Validation — Complete QA Canvas (Enterprise Guide)

---

# 1. Purpose of This Canvas
This document explains clearly:
- Difference between Contract Testing and Schema Validation
- What each testing type checks
- Execution sequence
- Real-time enterprise use cases
- When one passes and another fails
- Who performs it
- How to implement using RestAssured (Java) and Playwright
- Where data/contracts come from

Designed so **any QA / Developer / Lead can easily understand**.

---

# 2. High Level Understanding

## Contract Testing
Ensures agreement between:
- API Provider (Backend Service)
- API Consumer (Frontend / Another Microservice)

Goal:
> Backend changes must not break dependent systems.

---

## Schema Validation
Ensures API follows defined structure using:
- OpenAPI / Swagger
- JSON Schema

Goal:
> API response must follow technical design standards.

---

# 3. Correct Testing Sequence (Very Important)

API Design
↓
Contract Defined
↓
✅ Contract Testing (FIRST)
↓
API Implementation
↓
✅ Schema Validation (SECOND)
↓
✅ API Functional Testing (THIRD)
↓
Integration Testing
↓
Release

Reason:
- Contract prevents integration failure early.
- Schema ensures structure correctness.
- API testing validates business logic.

---

# 4. Checkpoints Covered

| Checkpoint | Contract Testing | Schema Validation |
|---|---|---|
| Consumer expectation | ✅ | ❌ |
| Required fields | ✅ | ✅ |
| Datatype validation | Partial | Complete |
| Allowed values | ✅ | Limited |
| Business meaning | ✅ | ❌ |
| Optional field dependency | ✅ | ❌ |
| Entire response validation | ❌ | ✅ |
| Backward compatibility | ✅ | ❌ |
| API design standard | ❌ | ✅ |
| Integration safety | ✅ | Partial |

---

# 5. Real Use Case — E‑Commerce Platform

System:
Mobile App → Order Service → Payment Service

Mobile App consumes Order API.

Expected Response:
```
{
  orderId: number,
  status: "SUCCESS" | "FAILED",
  discount: number | null
}
```

---

# 6. Case 1 — Contract PASS but Schema FAIL

Backend Response:
```
{
  orderId: 101,
  status: "SUCCESS",
  email: 12345
}
```

Consumer only needs:
- orderId
- status

Result:
Contract Testing → PASS
Schema Validation → FAIL (email datatype wrong)

Reason:
Contract checks consumer dependency only.
Schema checks full API correctness.

---

# 7. Case 2 — Schema PASS but Contract FAIL

Schema allows:
```
status: string
```

Backend sends:
```
{
  orderId: 101,
  status: "COMPLETED"
}
```

Frontend understands only:
SUCCESS / FAILED

Result:
Schema Validation → PASS
Contract Testing → FAIL

Reason:
Consumer workflow breaks.

---

# 8. Optional Field Example

Schema:
```
discount optional
```

Backend Response:
```
{
  orderId: 101,
  amount: 500
}
```

Schema → PASS

But UI logic:
```
finalPrice = amount - discount
```

Contract → FAIL

Best enterprise practice:
```
discount: null
```

---

# 9. Who Performs Contract Testing?

Shared Responsibility Model:

Consumer Team:
- Frontend developers
- Microservice consumers

Provider Team:
- Backend developers
- Automation QA

QA Role:
- Maintain contract tests
- Integrate in CI/CD

---

# 10. Who Performs Schema Validation?

Mostly:
- QA Engineers
- API Automation Engineers
- Backend validation pipelines

---

# 11. Where Contract Data Comes From

Contracts are created from:
1. API Design discussion
2. Consumer expectations
3. OpenAPI specification
4. Existing API usage
5. Pact generated contracts

Typical contract file:
```
consumer expectation JSON
```

Stored in:
- Git repository
- Contract broker (Pact Broker)

---

# 12. Where Schema Comes From

Schema sources:
- Swagger / OpenAPI
- JSON Schema file
- Backend API definition

Owned by Backend/API team.

---

# 13. How Contract Testing Works (Flow)

Consumer writes expectation
↓
Contract generated
↓
Provider verifies contract
↓
CI pipeline validates
↓
Deployment allowed

---

# 14. Contract Testing Using RestAssured (Java)

Common Approach:
- Pact JVM
- Spring Cloud Contract

Example Concept:
1. Consumer creates contract
2. Pact file generated
3. Provider verifies using RestAssured tests

Validation includes:
- Endpoint
- Response fields
- Expected values
- Datatypes

---

# 15. Contract Testing Using Playwright

Playwright supports API testing.

Approach:
- Consumer defines expected response
- Validate critical fields
- Validate allowed values

Example checks:
- status values
- mandatory consumer fields
- interaction correctness

Often combined with:
- Pact
- OpenAPI validation libraries

---

# 16. Schema Validation Using RestAssured

Typical implementation:
- JSON schema validator

Checks:
- datatype
- required fields
- structure

Executed during API automation suite.

---

# 17. Schema Validation Using Playwright

Using APIRequestContext:
- Call API
- Validate schema via JSON schema library

Checks full response structure automatically.

---

# 18. Enterprise CI/CD Placement

Developer Commit
↓
Contract Test
↓
Build
↓
Schema Validation
↓
API Tests
↓
Deploy

---

# 19. Simple Memory Model

Contract Testing:
"Will systems continue working?"

Schema Validation:
"Is API technically correct?"

API Testing:
"Does business logic work?"

---

# 20. Final Enterprise Rule

Modern Microservices require BOTH:
- Contract Testing → Stability
- Schema Validation → Quality

Removing either increases production risk.

