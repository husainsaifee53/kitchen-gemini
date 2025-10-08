---

## ⚙ Architecture Overview

### Frontend

- Built with *HTML, **TailwindCSS, and **Vanilla JavaScript*
- Responsive design with:
  - Landing section (explains the app concept)
  - Toggle for Veg / Non-Veg
  - Main recipe generation section

### Backend

- A *serverless function* hosted on *Vercel*
- Accepts the ingredient list as input
- Attaches the Gemini API key securely from environment variables
- Sends the crafted prompt and returns Gemini’s markdown response

---

## 📦 Tech Stack

| Layer       | Technology       |
|-------------|------------------|
| Frontend    | HTML, TailwindCSS, Vanilla JS |
| Backend     | Vercel Serverless Function |
| AI Provider | Gemini (Google AI) |
| Prompt      | Custom prompt for "Chef Gemini" |
| Styling     | Tailwind CSS |
| Fonts       | Poppins (headers), PT Sans (body), Source Code Pro (code) |

---

## 📷 Planned Feature: Image Input (Future)

> 🔍 *Vision Feature (Optional)*  
User uploads an image of ingredients → AI detects items → Sends text list to Gemini → Recipes generated.

This feature is *not in MVP*, but could be built using:
- Google Cloud Vision API or Tesseract.js for OCR
- Preprocessing the image → Ingredient detection
- Then feeding detected ingredients to Gemini as normal

---

## 🎨 UI/UX Design Principles

- *Typography:*  
  - Headings: 'Poppins'  
  - Body Text: 'PT Sans'  
  - Code Blocks: 'Source Code Pro'

- *Animations:*  
  - Subtle loading spinner when waiting for Gemini response

- *Colors:*  
  - Warm neutrals + green tones (eco-friendly, food-safe feel)

- *User Flow:*
  1. Landing page: "Ever stared into a fridge full of food and still felt like there's nothing to eat?"
  2. Input section: Add ingredients → Click “Find Recipes”
  3. Recipes rendered instantly

---

## ✅ Prompt Building Log

| Step | Description |
|------|-------------|
| 1️⃣ | Identified core user pain point – ingredient-based cooking |
| 2️⃣ | Designed ideal AI assistant: "Chef Gemini" |
| 3️⃣ | Wrote prompt for 2 recipe outputs with constraints |
| 4️⃣ | Tested with Gemini for formatting + quality |
| 5️⃣ | Integrated prompt into Vercel serverless backend |
| 6️⃣ | Created UI with Tailwind for fast dev |
| 7️⃣ | Rendered response as markdown in frontend |

---

## 🧪 Testing & Improvements

- ✅ Prompt tested with different inputs
- ✅ Handles both small and long ingredient lists
- 🚧 Next steps:
  - Add image upload feature for OCR-based ingredient detection
  - Store past generated recipes
  - User accounts and save favorites

---
