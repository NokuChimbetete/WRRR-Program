# Prompt for Claude: Digital Play Program - White Rabbit Red Rabbit

**System Role:** You are an expert Front-End Developer specializing in mobile-first, minimalist web design using HTML, CSS (Tailwind preferred), and JavaScript.

**Project Overview:** Create a single-page digital program for the theatre production **"White Rabbit Red Rabbit"** by Nassim Soleimanpour. The design must be **mobile-first**, minimalist, and use a high-contrast color palette: **Black background** (#000000) with **White and Red accents** (#FF0000).

### 1. Global Styles & Typography
* **Background:** Solid Black (#000000).
* **Role Titles:** Use a font similar to "Zing Rust Base Rough" (All Caps).
* **Names & Body Text:** Use a font similar to "ITC American Typewriter".
* **Accents:** Use Red (#FF0000) for specific icons and the "Double Rabbit" motifs.

### 2. Page Structure (Scroll Sequence)
**Header / Cover:**
* Display `poster.png` as the primary hero image.
* Feature the "Double Rabbit" icons (`double_red_rabbit` and `double_white_rabbit`) tilted as if watching the play.

**The Program Body (Alternating Layout):**
Organize the 10 team members into four sections. Each section should feature a **curved path of bunny footprints** (`footprints.svg`) running vertically behind or between the entries. Each entry consists of a portrait (`{Name}0.JPG`) and the Role Title/Name text. **Alternate the portrait position** (Left vs. Right).

* **Section 1: CAST** (Include `masks.svg` icon)
    * **Lead Actor:** Raluca Grigoras (Portrait on Left)
    * **Understudy:** Shanan Canon (Portrait on Right)
* **Section 2: CREATIVE TEAM** (Include `director.svg` icon)
    * **Director:** Caitlin Neall-Johnston (Portrait on Left)
    * **Producer:** Almira Halkina (Portrait on Right)
* **Section 3: CREW** (Include `tech.svg` icon)
    * **Stage Manager:** Noyuri Tsuji (Portrait on Left)
    * **Sound Engineer:** Haya Elmizwghi (Portrait on Right)
    * **Lighting Engineer:** Nokutenda Chirnbetete (Portrait on Left)
* **Section 4: FRONT OF HOUSE** (Include `booth.svg` icon)
    * **FOH Manager:** Vantrease Wilson (Portrait on Right)
    * **Head Usher:** Divya Tarak-Balaji (Portrait on Left)
    * **Creative Marketer:** Xuanting Zhao (Portrait on Right)

### 3. Interactivity: The Bio Hover (Modal)
When a user taps a portrait (`{Name}0.JPG`), trigger a **hover-state modal** (not a new page). 
* **Behavior:** The modal should cover most of the screen but allow the user to click outside it to close.
* **Content Layout:** * **Top:** A row of portraits. (Use 2 portraits for crew/creative, and 3 portraits for the 2 cast members).
    * **Middle:** Two distinct text blurbs separated by a horizontal line.
    * **Placeholder Text:** Use "Lorem ipsum" for now.

### 4. Footer Elements
* **Special Thanks Section:** Centered text: "Associated Students of Minerva".
* **Photo Carousel:** A grid from `CarouselPhotos`. Use a layout with **two minor images** (small) and **one major image** (large).
* **Event Info:** Include "April 20" and "Venue: Rangbhoomi Spaces" at the bottom.

### 5. Technical Requirements
* Ensure the footprint path (`footprints.svg`) is responsive.
* Use smooth scroll transitions.
* Use `object-fit: cover` for all portraits.
