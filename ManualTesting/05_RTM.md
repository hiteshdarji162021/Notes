# 📘 COMPLETE RTM (REQUIREMENT TRACEABILITY MATRIX) GUIDE
## Enterprise & ISO-Aligned Reference Document

Version: 1.0  
Owner: QA Lead / QA Architect  
Applicable Standard Reference: ISO/IEC/IEEE 29119 (Traceability Requirement)

---

# 1️⃣ WHAT IS RTM?

RTM (Requirement Traceability Matrix) is a structured document that ensures every requirement is:

- Designed
- Tested
- Executed
- Tracked
- Released

It provides **bidirectional traceability** between:

Requirement ↔ Test Case ↔ Defect ↔ Release

---

# 2️⃣ WHY RTM IS REQUIRED?

RTM ensures:

- No requirement is missed
- No unnecessary testing is done
- Defects are traceable to requirements
- Release coverage is measurable
- Audit compliance is maintained

Without RTM:

- Coverage gaps occur
- Scope confusion increases
- Audit risks increase
- Regression impact unclear

---

# 3️⃣ WHEN IS RTM CREATED?

RTM is created:

- After requirements are finalized (PRD/BRD approved)
- During test case design phase
- Before test execution begins

RTM is updated:

- During execution
- When defects are raised
- When requirements change
- Before release sign-off

RTM is finalized:

- At release completion

---

# 4️⃣ WHO CREATES RTM?

Primary Owner:
- QA Lead / QA Analyst

Contributors:
- Business Analyst
- Product Owner
- Developers (for technical clarification)

Final accountability lies with QA.

---

# 5️⃣ FOR WHOM IS RTM CREATED?

RTM is created for:

- QA Team (coverage tracking)
- Product Owner (requirement validation)
- Project Manager (scope control)
- Client (in external projects)
- Auditors (compliance proof)

---

# 6️⃣ HOW TO SHARE / SEND RTM?

RTM can be shared via:

- Jira + Zephyr live dashboard
- Exported Excel or CSV
- Confluence page
- Attached in release documentation

Best Practice:
- Maintain in tool (Jira/Zephyr)
- Export only for audit or client submission

---

# 7️⃣ TYPES OF RTM

There are three traceability directions:

---

## 🔹 7.1 Forward RTM

### Direction:
Requirement → Test Case

### Purpose:
Ensure all requirements have test coverage.

### Template Format:

| Requirement ID | Requirement Description | Priority | Test Case ID(s) | Coverage Status |
|---------------|------------------------|----------|------------------|------------------|

### Use Case:
- During test design
- Coverage validation
- Early audit review

---

## 🔹 7.2 Backward RTM

### Direction:
Test Case → Requirement

### Purpose:
Ensure every test case maps to a valid requirement.

### Template Format:

| Test Case ID | Test Case Description | Requirement ID | Valid Requirement? |
|--------------|----------------------|---------------|--------------------|

### Use Case:
- Scope control
- Prevent over-testing
- Regression cleanup

---

## 🔹 7.3 Bidirectional RTM (Best Practice)

### Direction:
Requirement ↔ Test Case ↔ Defect ↔ Release

### Purpose:
Complete governance traceability.

### Enterprise Template Format:

| Req ID | Requirement Description | Risk Level | Test Case ID | Execution Status | Defect ID | Release Version |
|--------|------------------------|------------|--------------|------------------|-----------|----------------|

### Benefits:
- Shows coverage
- Shows execution result
- Shows defect linkage
- Shows release mapping
- Supports audit compliance

---

# 8️⃣ WHICH RTM SHOULD YOU CREATE?

Recommendation:

✅ Create ONLY Bidirectional RTM.

Reason:
- Covers forward traceability
- Covers backward traceability
- Provides execution & defect visibility
- Enterprise-ready
- ISO aligned

Forward-only and Backward-only RTM are partial views.

Bidirectional RTM covers all scenarios.

---

# 9️⃣ MANY-TO-MANY RELATIONSHIP MODEL

RTM supports:

- One Requirement → Multiple Test Cases
- One Requirement → Multiple Defects
- One Test Case → Multiple Requirements

This is normal in complex systems.

---

# 🔟 RTM IN AGILE ENVIRONMENT

In Agile:

- RTM evolves sprint by sprint
- Stories link to test cases in Jira
- Defects automatically mapped
- Release tags applied

Manual Excel RTM discouraged when tool supports traceability.

---

# 11️⃣ RTM REVIEW PROCESS

RTM should be reviewed:

- Before sprint execution
- Before release sign-off
- During audit preparation

QA Lead ensures completeness.

---

# 12️⃣ COMMON RTM MISTAKES

- Creating separate RTMs for forward and backward
- Not updating RTM during sprint
- Not linking defects
- Not including release version
- Maintaining offline Excel without tool sync

---

# 13️⃣ RTM & ISO ALIGNMENT

ISO/IEC/IEEE 29119 requires:

- Traceability from requirement to test
- Traceability from test to defect
- Evidence of coverage
- Support for release decision

Bidirectional RTM satisfies these requirements.

---

# 14️⃣ FINAL ENTERPRISE RECOMMENDATION

For enterprise ecommerce (Web + API + App + Chatbot):

- Maintain Bidirectional RTM in Jira/Zephyr
- Include Risk Level
- Include Execution Status
- Include Defect ID
- Include Release Version

RTM should be living document, not static file.

---

# ✅ SUMMARY

RTM is:

- Coverage proof
- Governance mechanism
- Audit artifact
- Release decision support tool

Best Practice:

Use Bidirectional RTM with tool-based traceability.

---

**End of Complete RTM Guide**

