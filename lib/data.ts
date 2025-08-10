export type Chat = {
  id: string
  title: string
  updatedAt: string
}

export async function getChatHistory(): Promise<Chat[]> {
  // Simulate server-side data fetching with realistic delays
  await new Promise(resolve => setTimeout(resolve, 1000)) // 1000ms delay
  
  return [
    { id: '1', title: 'React performance optimization tips', updatedAt: '2024-01-15' },
    { id: '2', title: 'Next.js App Router best practices', updatedAt: '2024-01-14' },
    { id: '3', title: 'TypeScript generic constraints', updatedAt: '2024-01-13' },
    { id: '4', title: 'CSS Grid vs Flexbox comparison', updatedAt: '2024-01-12' },
    { id: '5', title: 'Python data analysis workflow', updatedAt: '2024-01-11' },
    { id: '6', title: 'Docker containerization guide', updatedAt: '2024-01-10' },
    { id: '7', title: 'AWS Lambda deployment strategies', updatedAt: '2024-01-09' },
    { id: '8', title: 'GraphQL vs REST API design', updatedAt: '2024-01-08' },
    { id: '9', title: 'Database indexing optimization', updatedAt: '2024-01-07' },
    { id: '10', title: 'Machine learning model evaluation', updatedAt: '2024-01-06' },
    { id: '11', title: 'Kubernetes scaling patterns', updatedAt: '2024-01-05' },
    { id: '12', title: 'Vue.js composition API tutorial', updatedAt: '2024-01-04' },
    { id: '13', title: 'Redis caching strategies', updatedAt: '2024-01-03' },
    { id: '14', title: 'JavaScript async/await patterns', updatedAt: '2024-01-02' },
    { id: '15', title: 'System design interview prep', updatedAt: '2024-01-01' },
  ]
}

export type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

const chatMessages: Record<string, Message[]> = {
  '1': [
    {
      id: '1',
      role: 'user',
      content: 'Can you help me understand React performance optimization?',
      timestamp: '2024-01-15T10:00:00Z'
    },
    {
      id: '2', 
      role: 'assistant',
      content: 'Absolutely! React performance optimization involves several key strategies:\n\n1. **Memoization** - Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders\n2. **Code splitting** - Implement lazy loading with React.lazy() and Suspense\n3. **Virtual scrolling** - For large lists, only render visible items\n4. **Bundle optimization** - Use tools like webpack-bundle-analyzer to identify bloat\n\nWould you like me to dive deeper into any of these areas?',
      timestamp: '2024-01-15T10:00:30Z'
    },
    {
      id: '3',
      role: 'user',
      content: 'Yes, can you show me some code examples of memoization?',
      timestamp: '2024-01-15T10:01:00Z'
    },
    {
      id: '4',
      role: 'assistant',
      content: 'Here are some practical examples of memoization in React:\n\n**React.memo for components:**\n```jsx\nconst ExpensiveComponent = React.memo(({ data, onClick }) => {\n  return (\n    <div onClick={onClick}>\n      {data.map(item => <Item key={item.id} {...item} />)}\n    </div>\n  )\n})\n```\n\n**useMemo for expensive calculations:**\n```jsx\nconst MyComponent = ({ items, filter }) => {\n  const filteredItems = useMemo(() => {\n    return items.filter(item => item.category === filter)\n      .sort((a, b) => a.name.localeCompare(b.name))\n  }, [items, filter])\n\n  return <ItemList items={filteredItems} />\n}\n```\n\n**useCallback for stable function references:**\n```jsx\nconst Parent = ({ items }) => {\n  const handleClick = useCallback((id) => {\n    // Handle click logic\n  }, [])\n\n  return items.map(item => \n    <Child key={item.id} onClick={handleClick} />\n  )\n}\n```',
      timestamp: '2024-01-15T10:01:45Z'
    }
  ],
  '2': [
    {
      id: '1',
      role: 'user',
      content: 'What are the key differences between Next.js App Router and Pages Router?',
      timestamp: '2024-01-14T15:30:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Great question! Here are the key differences between App Router and Pages Router:\n\n**App Router (Recommended):**\n- Server Components by default\n- Nested layouts and loading states\n- Built-in SEO support\n- Streaming and Suspense\n- Colocation of components, tests, and styles\n\n**Pages Router (Legacy):**\n- Client Components by default\n- Page-level data fetching\n- File-based routing in `/pages`\n- getServerSideProps/getStaticProps\n\nApp Router is the future of Next.js with better performance and developer experience.',
      timestamp: '2024-01-14T15:30:45Z'
    },
    {
      id: '3',
      role: 'user',
      content: 'How do I migrate from Pages Router to App Router?',
      timestamp: '2024-01-14T15:31:15Z'
    },
    {
      id: '4',
      role: 'assistant',
      content: 'Here\'s a step-by-step migration guide:\n\n**1. Create the app directory:**\n```bash\nmkdir app\n```\n\n**2. Move pages to app directory:**\n- `pages/index.js` → `app/page.js`\n- `pages/about.js` → `app/about/page.js`\n- `pages/blog/[slug].js` → `app/blog/[slug]/page.js`\n\n**3. Convert layouts:**\n```jsx\n// app/layout.js\nexport default function RootLayout({ children }) {\n  return (\n    <html>\n      <body>{children}</body>\n    </html>\n  )\n}\n```\n\n**4. Update data fetching:**\n- Replace `getServerSideProps` with async Server Components\n- Replace `getStaticProps` with async Server Components\n- Use `fetch()` directly in components\n\n**5. Handle client components:**\nAdd `"use client"` directive for interactive components.',
      timestamp: '2024-01-14T15:32:00Z'
    }
  ],
  '3': [
    {
      id: '1',
      role: 'user',
      content: 'Explain TypeScript generic constraints with examples',
      timestamp: '2024-01-13T09:15:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'TypeScript generic constraints allow you to limit the types that can be used with generics. Here are some examples:\n\n```typescript\n// Basic constraint\ninterface Lengthwise {\n  length: number;\n}\n\nfunction logLength<T extends Lengthwise>(arg: T): T {\n  console.log(arg.length);\n  return arg;\n}\n\n// Keyof constraint\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\n// Conditional types with constraints\ntype NonNullable<T> = T extends null | undefined ? never : T;\n```\n\nConstraints make your generics more type-safe and enable better IntelliSense!',
      timestamp: '2024-01-13T09:15:30Z'
    }
  ],
  '4': [
    {
      id: '1',
      role: 'user',
      content: 'What are the main differences between CSS Grid and Flexbox?',
      timestamp: '2024-01-12T14:20:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Great question! CSS Grid and Flexbox are both powerful layout systems, but they excel in different scenarios:\n\n**CSS Grid (2D Layout):**\n- Best for complex, grid-based layouts\n- Controls both rows and columns simultaneously\n- Ideal for page-level layouts\n- Can overlap items easily\n\n**Flexbox (1D Layout):**\n- Best for component-level layouts\n- Controls either row OR column at a time\n- Excellent for centering and distributing space\n- Great for navigation bars, card layouts\n\n**When to use Grid:**\n```css\n.container {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: auto 1fr auto;\n  gap: 1rem;\n}\n```\n\n**When to use Flexbox:**\n```css\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n```',
      timestamp: '2024-01-12T14:20:45Z'
    },
    {
      id: '3',
      role: 'user',
      content: 'Can you show me a practical example where I might use both together?',
      timestamp: '2024-01-12T14:21:15Z'
    },
    {
      id: '4',
      role: 'assistant',
      content: 'Absolutely! Here\'s a common pattern where Grid and Flexbox work together:\n\n```css\n/* Grid for overall page layout */\n.page {\n  display: grid;\n  grid-template-areas: \n    "header header"\n    "sidebar main"\n    "footer footer";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n}\n\n/* Flexbox for header navigation */\n.header {\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n\n/* Flexbox for card layouts in main content */\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.card {\n  flex: 1 1 300px; /* grow, shrink, basis */\n  display: flex;\n  flex-direction: column;\n}\n```\n\n**The pattern:**\n- Grid creates the overall page structure\n- Flexbox handles component-level layouts within grid areas\n- This gives you the best of both worlds!',
      timestamp: '2024-01-12T14:22:00Z'
    }
  ],
  '5': [
    {
      id: '1',
      role: 'user',
      content: 'I need help setting up a Python data analysis workflow',
      timestamp: '2024-01-11T11:30:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'I\'d be happy to help you set up a Python data analysis workflow! Here\'s a comprehensive setup:\n\n**1. Essential Libraries:**\n```python\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\n```\n\n**2. Project Structure:**\n```\ndata-project/\n├── data/\n│   ├── raw/\n│   ├── processed/\n│   └── external/\n├── notebooks/\n├── src/\n│   ├── data/\n│   ├── features/\n│   └── models/\n├── reports/\n└── requirements.txt\n```\n\n**3. Basic Workflow:**\n```python\n# Load data\ndf = pd.read_csv(\'data/raw/dataset.csv\')\n\n# Explore\nprint(df.info())\nprint(df.describe())\n\n# Clean\ndf = df.dropna()\ndf = df.drop_duplicates()\n\n# Analyze\nsns.pairplot(df)\nplt.show()\n```',
      timestamp: '2024-01-11T11:30:45Z'
    }
  ],
  '6': [
    {
      id: '1',
      role: 'user',
      content: 'Can you explain Docker containerization and show me how to get started?',
      timestamp: '2024-01-10T16:45:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Docker is a platform that packages applications into containers - lightweight, portable units that include everything needed to run your app.\n\n**Key Concepts:**\n- **Image**: A blueprint for containers\n- **Container**: Running instance of an image\n- **Dockerfile**: Instructions to build an image\n\n**Basic Dockerfile:**\n```dockerfile\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]\n```\n\n**Essential Commands:**\n```bash\n# Build image\ndocker build -t my-app .\n\n# Run container\ndocker run -p 3000:3000 my-app\n\n# List containers\ndocker ps\n\n# Stop container\ndocker stop <container-id>\n```\n\n**Benefits:**\n- Consistent environments\n- Easy deployment\n- Isolation\n- Scalability',
      timestamp: '2024-01-10T16:45:30Z'
    }
  ],
  '7': [
    {
      id: '1',
      role: 'user',
      content: 'What are some effective AWS Lambda deployment strategies?',
      timestamp: '2024-01-09T13:20:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Here are proven AWS Lambda deployment strategies:\n\n**1. Blue/Green Deployments:**\n```yaml\n# serverless.yml\nfunctions:\n  api:\n    handler: handler.api\n    deploymentSettings:\n      type: AllAtOnce\n      alias: Live\n```\n\n**2. Canary Deployments:**\n```yaml\ndeploymentSettings:\n  type: Canary10Percent5Minutes\n  alarms:\n    - AliasErrorMetricGreaterThanZeroAlarm\n```\n\n**3. Environment Management:**\n```bash\n# Deploy to staging\nsls deploy --stage staging\n\n# Deploy to production\nsls deploy --stage production\n```\n\n**4. Infrastructure as Code:**\n- Use AWS SAM or Serverless Framework\n- Version control your infrastructure\n- Automated deployments via CI/CD\n\n**Best Practices:**\n- Monitor with CloudWatch\n- Use proper IAM roles\n- Implement health checks\n- Test locally with SAM Local',
      timestamp: '2024-01-09T13:20:45Z'
    }
  ],
  '8': [
    {
      id: '1',
      role: 'user',
      content: 'When should I use GraphQL vs REST API?',
      timestamp: '2024-01-08T10:15:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Great question! Here\'s when to choose each:\n\n**Choose GraphQL when:**\n- You need flexible data fetching\n- Mobile apps with bandwidth constraints\n- Complex, nested data relationships\n- Rapid frontend development\n- Real-time subscriptions needed\n\n**Choose REST when:**\n- Simple CRUD operations\n- Caching is important\n- Team familiarity with REST\n- File uploads/downloads\n- HTTP caching benefits\n\n**GraphQL Example:**\n```graphql\nquery {\n  user(id: "123") {\n    name\n    posts {\n      title\n      comments {\n        content\n        author\n      }\n    }\n  }\n}\n```\n\n**REST Example:**\n```\nGET /api/users/123\nGET /api/users/123/posts\nGET /api/posts/456/comments\n```\n\n**Hybrid Approach:**\nMany teams use both - REST for simple operations, GraphQL for complex data fetching.',
      timestamp: '2024-01-08T10:15:30Z'
    }
  ],
  '9': [
    {
      id: '1',
      role: 'user',
      content: 'How can I optimize database indexing for better performance?',
      timestamp: '2024-01-07T15:45:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Database indexing optimization is crucial for performance. Here\'s a comprehensive guide:\n\n**Index Types:**\n```sql\n-- B-tree (most common)\nCREATE INDEX idx_user_email ON users(email);\n\n-- Composite index\nCREATE INDEX idx_user_status_date ON users(status, created_at);\n\n-- Partial index\nCREATE INDEX idx_active_users ON users(email) WHERE status = \'active\';\n\n-- Unique index\nCREATE UNIQUE INDEX idx_username ON users(username);\n```\n\n**Optimization Strategies:**\n1. **Index selectivity** - High selectivity = better performance\n2. **Query patterns** - Index columns in WHERE, JOIN, ORDER BY\n3. **Composite index order** - Most selective column first\n4. **Avoid over-indexing** - Each index has write overhead\n\n**Tools for Analysis:**\n```sql\n-- PostgreSQL\nEXPLAIN ANALYZE SELECT * FROM users WHERE email = \'john@example.com\';\n\n-- MySQL\nEXPLAIN SELECT * FROM users WHERE email = \'john@example.com\';\n```\n\n**Best Practices:**\n- Monitor slow queries\n- Regular ANALYZE/UPDATE STATISTICS\n- Consider covering indexes\n- Drop unused indexes',
      timestamp: '2024-01-07T15:45:45Z'
    }
  ],
  '10': [
    {
      id: '1',
      role: 'user',
      content: 'I\'m working on machine learning model evaluation. What metrics should I focus on?',
      timestamp: '2024-01-06T12:30:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Model evaluation metrics depend on your problem type. Here\'s a comprehensive breakdown:\n\n**Classification Metrics:**\n```python\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score\n\n# Basic metrics\naccuracy = accuracy_score(y_true, y_pred)\nprecision = precision_score(y_true, y_pred, average=\'weighted\')\nrecall = recall_score(y_true, y_pred, average=\'weighted\')\nf1 = f1_score(y_true, y_pred, average=\'weighted\')\nauc = roc_auc_score(y_true, y_pred_proba)\n```\n\n**Regression Metrics:**\n```python\nfrom sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score\n\nmse = mean_squared_error(y_true, y_pred)\nrmse = np.sqrt(mse)\nmae = mean_absolute_error(y_true, y_pred)\nr2 = r2_score(y_true, y_pred)\n```\n\n**When to use what:**\n- **Accuracy**: Balanced datasets\n- **Precision**: When false positives are costly\n- **Recall**: When false negatives are costly\n- **F1-Score**: Imbalanced datasets\n- **AUC-ROC**: Ranking/probability quality\n\n**Cross-validation:**\n```python\nfrom sklearn.model_selection import cross_val_score\nscores = cross_val_score(model, X, y, cv=5, scoring=\'f1_weighted\')\n```',
      timestamp: '2024-01-06T12:30:45Z'
    }
  ],
  '11': [
    {
      id: '1',
      role: 'user',
      content: 'What are some important Kubernetes scaling patterns I should know?',
      timestamp: '2024-01-05T09:45:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Here are essential Kubernetes scaling patterns:\n\n**1. Horizontal Pod Autoscaler (HPA):**\n```yaml\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: app-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: my-app\n  minReplicas: 3\n  maxReplicas: 100\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 70\n```\n\n**2. Vertical Pod Autoscaler (VPA):**\n```yaml\napiVersion: autoscaling.k8s.io/v1\nkind: VerticalPodAutoscaler\nmetadata:\n  name: app-vpa\nspec:\n  targetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: my-app\n  updatePolicy:\n    updateMode: "Auto"\n```\n\n**3. Cluster Autoscaler:**\n- Automatically adds/removes nodes\n- Responds to pod scheduling failures\n- Considers node utilization\n\n**4. Custom Metrics:**\n```yaml\nmetrics:\n- type: External\n  external:\n    metric:\n      name: queue-length\n    target:\n      type: Value\n      value: "30"\n```',
      timestamp: '2024-01-05T09:45:30Z'
    }
  ],
  '12': [
    {
      id: '1',
      role: 'user',
      content: 'Can you walk me through Vue.js Composition API?',
      timestamp: '2024-01-04T14:15:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'The Vue.js Composition API provides a more flexible way to organize component logic. Here\'s a comprehensive overview:\n\n**Basic Setup:**\n```vue\n<template>\n  <div>\n    <h1>{{ title }}</h1>\n    <p>Count: {{ count }}</p>\n    <button @click="increment">Increment</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref, computed, onMounted } from \'vue\'\n\n// Reactive state\nconst count = ref(0)\nconst title = ref(\'My App\')\n\n// Computed properties\nconst doubleCount = computed(() => count.value * 2)\n\n// Methods\nconst increment = () => {\n  count.value++\n}\n\n// Lifecycle\nonMounted(() => {\n  console.log(\'Component mounted\')\n})\n</script>\n```\n\n**Composables (Custom Hooks):**\n```javascript\n// useCounter.js\nimport { ref } from \'vue\'\n\nexport function useCounter(initialValue = 0) {\n  const count = ref(initialValue)\n  \n  const increment = () => count.value++\n  const decrement = () => count.value--\n  const reset = () => count.value = initialValue\n  \n  return {\n    count,\n    increment,\n    decrement,\n    reset\n  }\n}\n```',
      timestamp: '2024-01-04T14:15:45Z'
    }
  ],
  '13': [
    {
      id: '1',
      role: 'user',
      content: 'What are some effective Redis caching strategies?',
      timestamp: '2024-01-03T11:20:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Here are proven Redis caching strategies:\n\n**1. Cache-Aside Pattern:**\n```python\ndef get_user(user_id):\n    # Try cache first\n    user = redis.get(f"user:{user_id}")\n    if user:\n        return json.loads(user)\n    \n    # Fall back to database\n    user = db.get_user(user_id)\n    if user:\n        redis.setex(f"user:{user_id}", 3600, json.dumps(user))\n    return user\n```\n\n**2. Write-Through Pattern:**\n```python\ndef update_user(user_id, data):\n    # Update database\n    db.update_user(user_id, data)\n    # Update cache\n    redis.setex(f"user:{user_id}", 3600, json.dumps(data))\n```\n\n**3. Write-Behind Pattern:**\n```python\ndef update_user_async(user_id, data):\n    # Update cache immediately\n    redis.setex(f"user:{user_id}", 3600, json.dumps(data))\n    # Queue database update\n    queue.add_task(\'update_user_db\', user_id, data)\n```\n\n**Key Strategies:**\n- **TTL management** - Set appropriate expiration\n- **Cache warming** - Pre-load frequently accessed data\n- **Invalidation** - Remove stale data promptly\n- **Namespacing** - Organize keys logically\n\n**Redis Data Structures:**\n- Strings for simple values\n- Hashes for objects\n- Sets for unique collections\n- Sorted sets for rankings',
      timestamp: '2024-01-03T11:20:30Z'
    }
  ],
  '14': [
    {
      id: '1',
      role: 'user',
      content: 'Can you explain JavaScript async/await patterns and best practices?',
      timestamp: '2024-01-02T16:30:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Async/await makes asynchronous JavaScript much more readable. Here are the key patterns:\n\n**Basic Usage:**\n```javascript\n// Instead of promises\nfunction fetchUserData() {\n  return fetch(\'/api/user\')\n    .then(response => response.json())\n    .then(data => processData(data))\n    .catch(error => handleError(error))\n}\n\n// With async/await\nasync function fetchUserData() {\n  try {\n    const response = await fetch(\'/api/user\')\n    const data = await response.json()\n    return processData(data)\n  } catch (error) {\n    handleError(error)\n  }\n}\n```\n\n**Parallel Execution:**\n```javascript\n// Sequential (slower)\nasync function fetchData() {\n  const user = await fetch(\'/api/user\')\n  const posts = await fetch(\'/api/posts\')\n  return { user, posts }\n}\n\n// Parallel (faster)\nasync function fetchData() {\n  const [user, posts] = await Promise.all([\n    fetch(\'/api/user\'),\n    fetch(\'/api/posts\')\n  ])\n  return { user, posts }\n}\n```\n\n**Error Handling Patterns:**\n```javascript\n// Multiple try-catch blocks\nasync function complexOperation() {\n  let user, posts\n  \n  try {\n    user = await fetchUser()\n  } catch (error) {\n    console.error(\'User fetch failed:\', error)\n    return null\n  }\n  \n  try {\n    posts = await fetchPosts(user.id)\n  } catch (error) {\n    console.error(\'Posts fetch failed:\', error)\n    posts = []\n  }\n  \n  return { user, posts }\n}\n```',
      timestamp: '2024-01-02T16:30:45Z'
    }
  ],
  '15': [
    {
      id: '1',
      role: 'user',
      content: 'I\'m preparing for system design interviews. What should I focus on?',
      timestamp: '2024-01-01T10:00:00Z'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'System design interviews test your ability to architect large-scale systems. Here\'s what to focus on:\n\n**Core Concepts:**\n1. **Scalability** - Horizontal vs Vertical scaling\n2. **Reliability** - Fault tolerance, redundancy\n3. **Availability** - Uptime, disaster recovery\n4. **Consistency** - CAP theorem, eventual consistency\n5. **Performance** - Latency, throughput\n\n**Common Patterns:**\n```\n[Load Balancer] → [Web Servers] → [Cache] → [Database]\n                     ↓\n                [Message Queue] → [Workers]\n```\n\n**Key Technologies:**\n- **Databases**: SQL vs NoSQL, sharding\n- **Caching**: Redis, Memcached, CDNs\n- **Message Queues**: Kafka, RabbitMQ\n- **Load Balancers**: Layer 4 vs Layer 7\n- **Monitoring**: Logging, metrics, alerting\n\n**Interview Approach:**\n1. **Clarify requirements** - Scale, features, constraints\n2. **High-level design** - Major components\n3. **Detailed design** - APIs, data models\n4. **Scale the design** - Bottlenecks, solutions\n5. **Address concerns** - Monitoring, security\n\n**Practice Systems:**\n- URL shortener (like bit.ly)\n- Chat system (like WhatsApp)\n- News feed (like Twitter)\n- Video streaming (like YouTube)',
      timestamp: '2024-01-01T10:00:45Z'
    }
  ]
}

export async function getChatMessages(chatId: string): Promise<Message[]> {
  // Simulate server-side data fetching with realistic delays
  await new Promise(resolve => setTimeout(resolve, 800)) // 800ms delay
  
  return chatMessages[chatId] || []
}