# Ask the Muses AI

This is a fully responsive AI-powered writing assistant built with **Next.js**, **ShadCN/UI**, and **Tailwind CSS**. The assistant allows users to rewrite text, adjust tone and length, and understand how AI suggestions improve their writing. It integrates OpenAI's API for text generation and includes a history feature for tracking rewrites. it is branded as a service delivered by the Ancient Greek Gods of Literature "The Muses".

---

## Features

### Core Features

- **Rewrite Sentences or Paragraphs**: Users can input text and get AI-generated rewritten suggestions.
- **Customizable Options**:
  - Select tone (e.g., formal, casual, persuasive).
  - Specify length (e.g., shorter, longer, concise).
- **Explain Suggestions**: A feature to explain how AI-generated text improves the original.
- **Rewrite History**: Tracks past rewrites with options to delete individual history items.

### Bonus Features

- **Download History**: Export rewrite history as a `.txt` file.
- **Auto-save History**: Automatically saves history in local storage.
- **Mobile Responsiveness**: Fully responsive design for seamless use on mobile and desktop devices.

---

## Tech Stack

### Frameworks and Libraries

- **Next.js 15+**: Utilizes the `app` directory structure for routing and API endpoints.
- **ShadCN/UI**: Provides pre-designed, customizable UI components.
- **Tailwind CSS**: Used for styling and responsiveness.

### Backend Integration

- **OpenAI API**: Powers text rewriting and explanation features.

### Tools

- **TypeScript**: Ensures type safety across the codebase.
- **ESLint and Prettier**: Maintain consistent code formatting and quality.

---

## Folder Structure

```plaintext
ai-writing-assistant/
├── src/
│   ├── app/                       # Next.js app directory
│   │   ├── api/                   # API routes
│   │   │   └── rewrite/           # Rewrite endpoint
│   │   │       └── route.ts
│   │   │   └── explain/           # Explain endpoint
│   │   │       └── route.ts
│   │   ├── favicon.ico            # Favicon
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Main page
│   ├── components/                # Reusable components
│   │   ├── ui/                    # UI primitives
│   │   │   └── button.tsx
│   │   │   └── label.tsx
│   │   │   └── select.tsx
│   │   │   └── textarea.tsx
│   │   ├── ExplainButton.tsx      # Explain feature button
│   │   ├── Header.tsx             # Page header
│   │   ├── HistoryItem.tsx        # Individual history item
│   │   ├── RewriteForm.tsx        # Form for input and options
│   │   └── RewriteHistory.tsx     # History display component
│   ├── lib/                       # Utility libraries
│   │   └── openai.ts              # OpenAI API client
│   │   └── utils.ts               # Utility functions
│   │   └── types.ts               # TypeScript types
├── public/                        # Public assets
├── .env.local                     # Environment variables (API keys, etc.)
├── .gitignore                     # Git ignore rules
├── next.config.js                 # Next.js configuration
├── package.json                   # Project dependencies
├── postcss.config.js              # PostCSS configuration
├── README.md                      # Project documentation
├── tailwind.config.js             # Tailwind CSS configuration
└── tsconfig.json                  # TypeScript configuration
```

---

## Installation

### Prerequisites

- Node.js 18 or later
- npm or yarn
- OpenAI API key

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/maxitect/ai-writing-assistant.git
   cd ai-writing-assistant
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   If it errors, try:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Create a `.env.local` file and add your OpenAI API key:

   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

1. **Input Text**:

   - Enter a sentence or paragraph in the text area.

2. **Customize Options**:

   - Adjust tone and length using the dropdown menus.

3. **Rewrite and Explain**:

   - Click "Ask the Muses" to generate a rewritten version.
   - Use the "Ask the Muses to explain" button to understand the improvements.

4. **View and Manage History**:
   - Rewrites are automatically saved in history, aka `The Muses' Archives`.
   - Delete items or export history as a `.txt` file.

---

## Deployment

Deploy the project using platforms like **Vercel** for optimal integration with Next.js:

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy the project:

   ```bash
   vercel
   ```

3. Set environment variables (`OPENAI_API_KEY`) in Vercel dashboard.

---

## API Endpoints

### **POST /api/rewrite**

- **Request**:

  ```json
  {
    "input": "Your input text here",
    "tone": "formal",
    "length": "concise"
  }
  ```

- **Response**:
  ```json
  {
    "rewritten": "Your rewritten text here"
  }
  ```

### **POST /api/explain**

- **Request**:

  ```json
  {
    "input": "Prompt asking for explanation here"
  }
  ```

- **Response**:
  ```json
  {
    "explanation": "Explanation of how the rewritten text improves the original"
  }
  ```

---

## Credits

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [ShadCN/UI](https://shadcn.dev/)
- **API**: [OpenAI](https://openai.com/)
