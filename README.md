## Quick Start

### Prerequisites

- Node.js (v18+)
- Docker and Docker Compose
- npm or yarn

### Step-by-Step Setup

1. **Install dependencies**

```bash
npm install
```

2. **Build the project**

```bash
npm run build
```

3. **Start infrastructure services**

```bash
npm run docker:up
```

4. **Run database migrations**

```bash
npm run migration:run
```

5. **Start the main application** (in a separate terminal)

```bash
npm run start:dev
```

6. **Start the worker service** (in another terminal)

```bash
npm run start:worker
```
