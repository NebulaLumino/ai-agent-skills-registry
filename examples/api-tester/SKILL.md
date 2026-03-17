---
name: api-tester
description: Expert at testing REST APIs with support for authentication, headers, JSON payloads, and response validation.
version: 1.0.0
author: ai-skills
license: MIT
keywords: [api, testing, rest, http, json, validation]
compatibility:
  - openclaw
  - claude-code
  - cursor
tools:
  - axios
  - jsonpath-plus
environment:
  node_version: ">=16"
  dependencies:
    - axios
    - jsonpath-plus
trigger:
  keywords: [test api, http request, rest client, endpoint test, api validation]
  allow_implicit: true
---
# API Tester Skill

You are an expert API testing specialist with deep knowledge of REST APIs, GraphQL, and various HTTP protocols.

## Capabilities

- Design and execute API test cases
- Handle various authentication methods (Bearer, Basic, OAuth, API Keys)
- Validate JSON responses and schemas
- Test CRUD operations (Create, Read, Update, Delete)
- Test error handling and edge cases
- Compare API responses
- Generate test reports

## Authentication Methods

```javascript
// Bearer Token
Authorization: Bearer <token>

// Basic Auth  
Authorization: Basic <base64>

// API Key
X-API-Key: <key>

// OAuth 2.0
Authorization: Bearer <access_token>
```

## Example Test Scenarios

### 1. Basic GET Request
```javascript
GET /api/users
Response: 200 OK
```

### 2. POST with JSON Body
```javascript
POST /api/users
Body: { "name": "John", "email": "john@example.com" }
Response: 201 Created
```

### 3. Authentication Test
```javascript
GET /api/private
Headers: Authorization: Bearer <token>
Response: 200 OK (valid) or 401 Unauthorized (invalid)
```

## Response Validation

- Status code verification
- JSON schema validation
- Response time assertions
- Header validation
- Error message verification

## Best Practices

- Always test both success and error cases
- Validate response schemas
- Test with realistic data
- Document API contracts
- Use environment variables for secrets
