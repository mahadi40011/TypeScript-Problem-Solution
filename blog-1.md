# Keep Your Code DRY: _Creating Interface Slices with "Pick" and "Omit"_
In large TypeScript applications, replicating parts of a master interface for different use cases (like API payloads or UI states) leads to code duplication. This violates the DRY (Don't Repeat Yourself) principle and makes maintenance a nightmare.

TypeScript’s Pick and Omit utility types solve this by letting you create specialized "slices" from a single master interface.

### The Problem: *Duplicating Fields*
```TypeScript
interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

// Bad Practice: Redundant and hard to maintain if 'User' changes
interface PublicProfile {
  name: string;
}
```
### The Solution: _Dynamic Slices_

Pick<Type, Keys>: Extracts specific properties from an interface.

Omit<Type, Keys>: Removes specific properties and keeps the rest.

```TypeScript
// Extracts only the 'name' property
type PublicProfile = Pick<User, 'name'>;

// Removes 'id' and 'isAdmin', keeping 'name' and 'email'
type CreateUserPayload = Omit<User, 'id' | 'isAdmin'>;
```
### Why It Matters
By defining a single source of truth, any update to the master User interface automatically trickles down to your slices. This eliminates manual updates and prevents refactoring bugs.
