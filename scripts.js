document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const blogLink = document.getElementById('blog-link');

    const homeSection = document.getElementById('home-section');
    const aboutSection = document.getElementById('about-section');
    const blogSection = document.getElementById('blog-section');

    const sections = [homeSection, aboutSection, blogSection];
    const links = [homeLink, aboutLink, blogLink];

    function showSection(section) {
        sections.forEach(sec => sec.style.display = 'none');
        section.style.display = 'block';
    }

    function setActiveLink(link) {
        links.forEach(lnk => lnk.classList.remove('active'));
        link.classList.add('active');
    }

    homeLink.addEventListener('click', function() {
        showSection(homeSection);
        setActiveLink(homeLink);
    });

    aboutLink.addEventListener('click', function() {
        showSection(aboutSection);
        setActiveLink(aboutLink);
    });

    blogLink.addEventListener('click', function() {
        showSection(blogSection);
        setActiveLink(blogLink);
    });

    // Default to showing the home section
    showSection(homeSection);
    setActiveLink(homeLink);

    // Carousel functionality
    let currentImageIndex = 0;
    const carouselImages = document.querySelectorAll('.carousel-image');
    const totalImages = carouselImages.length;

    function showImage(index) {
        carouselImages.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    }

    document.getElementById('prev-button').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showImage(currentImageIndex);
    });

    document.getElementById('next-button').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    });

    // Show the first image by default
    showImage(currentImageIndex);

    // Sample data for blog posts
    const blogPosts = [
    {
        title: 'First Blog Post',
        content: `Time travel stories have always been super cool. They make you think about all kinds of crazy stuff and can be so exciting! There are two TV shows I really want to talk about because they're awesome and all about time travel: "Dark" and "12 Monkeys."

"Dark" is this German show that came out on Netflix in 2017. It's all about this small town called Winden and these four families who get caught up in this huge time travel mystery. What's really cool is how the show messes with time. It's like a big puzzle where everything is connected - past, present, and future. It's mind-bending, but in a really cool way.

The characters in "Dark" are so interesting. They've all got secrets, and you see how their lives are tangled up across different times. And the show gets pretty deep, talking about heavy stuff like loss and trying to change the past. It's not just about time travel; it's about what it means to be human.

Then there's "12 Monkeys." It's an American show from a few years back. This one's all about this guy named James Cole who goes back in time to stop a deadly virus from wiping out humanity. It's more action-packed than "Dark," with lots of twists and turns. But it's also got some deep stuff going on, like fate and free will. And the characters, especially James and Dr. Cassandra Railly, make the whole thing feel real.

Both shows are amazing in their own way. "Dark" is like a big puzzle you have to solve, while "12 Monkeys" is more about the thrill of saving the world. But they both make you think about time in ways you never have before.

If you're into time travel stuff, you've gotta check out "Dark" and "12 Monkeys." They're not just entertaining; they'll make you think about time in a whole new light. So grab some popcorn and get ready for a wild ride through time!`
    },
    {
        title: 'Second Blog Post',
        content: `"12 Rules for Life" by Jordan B. Peterson
"12 Rules for Life" is a book by Jordan B. Peterson that offers practical advice on how to live a better life. Peterson shares twelve principles that can help people navigate the challenges of modern life. His writing style is straightforward and easy to understand, making the book accessible to readers of all backgrounds. Each rule is accompanied by examples and anecdotes that illustrate its importance. Overall, "12 Rules for Life" is a thought-provoking read that encourages self-reflection and personal growth.

"Men Are from Mars, Women Are from Venus" by John Gray
"Men Are from Mars, Women Are from Venus" is a classic book by John Gray that explores the differences between men and women in relationships. Gray uses simple language and relatable examples to explain how men and women communicate differently and have different needs. The book offers practical advice for improving communication and understanding between partners. While some of the ideas may seem dated, the overall message of the book—that men and women are fundamentally different but can still have fulfilling relationships—is timeless.

"Atomic Habits" by James Clear
"Atomic Habits" is a book by James Clear that explores the power of small habits in creating big changes. Clear explains how habits work and offers practical strategies for building good habits and breaking bad ones. His writing is clear and concise, making complex concepts easy to understand. The book is filled with actionable advice and real-life examples that inspire readers to take control of their habits and improve their lives. Overall, "Atomic Habits" is a must-read for anyone looking to make positive changes in their life.

"The Subtle Art of Not Giving a F*ck" by Mark Manson
"The Subtle Art of Not Giving a F*ck" is a book by Mark Manson that challenges conventional self-help advice. Manson argues that we should focus on what truly matters to us and let go of the rest. His writing is blunt and irreverent, but also humorous and insightful. The book encourages readers to embrace their flaws and accept that life is inherently messy and imperfect. While some may find Manson's approach off-putting, others will appreciate his honesty and unconventional wisdom.

"Steve Jobs" by Walter Isaacson
"Steve Jobs" is a biography by Walter Isaacson that chronicles the life of the legendary Apple co-founder. Isaacson's writing is engaging and informative, providing readers with a detailed look at Jobs' personal and professional life. The book explores Jobs' successes and failures, as well as his complex personality and leadership style. While Jobs is portrayed as a brilliant innovator, he is also depicted as a difficult and often controversial figure. Overall, "Steve Jobs" is a fascinating read that offers valuable insights into the life of one of the most influential figures in technology.`
    },
    {
        title: 'Third Blog Post',
        content: `**"Young Sheldon"**: "Young Sheldon" is a funny and heartwarming show that follows the childhood of Sheldon Cooper from "The Big Bang Theory." It's set in the 1980s and shows how Sheldon, a young genius, navigates life with his quirky family and friends. The humor is light-hearted and relatable, making it a great watch for anyone looking for a good laugh.

**"The Big Bang Theory"**: "The Big Bang Theory" is a popular sitcom that revolves around a group of nerdy friends and their adventures in love, friendship, and science. The characters are lovable and the jokes are clever, making it a hit with audiences worldwide. Whether you're a science enthusiast or just looking for a good comedy, "The Big Bang Theory" has something for everyone.

**"Friends"**: "Friends" is a timeless classic that follows the lives of six friends living in New York City. The show explores themes of love, friendship, and adulthood, all while delivering laughs and heartwarming moments. The chemistry between the cast is undeniable, making it easy to get invested in their lives and relationships. With its witty dialogue and memorable characters, "Friends" is a must-watch for sitcom lovers everywhere.

**"Modern Family"**: "Modern Family" is a mockumentary-style sitcom that follows the lives of three diverse families connected by marriage. The show tackles modern-day issues with humor and heart, offering a fresh take on the traditional family sitcom. The ensemble cast is talented and charismatic, bringing each character to life in a way that feels authentic and relatable. Whether you're a parent, a sibling, or just a fan of good comedy, "Modern Family" is sure to entertain.

### Cartoons:

**"Shinchan"**: "Shinchan" is a hilarious and irreverent anime about a mischievous little boy named Shinchan. The show follows Shinchan as he gets into all sorts of trouble with his family and friends. The humor is silly and slapstick, but also surprisingly clever at times. With its colorful animation and lovable characters, "Shinchan" is a hit with viewers of all ages.

**"Doraemon"**: "Doraemon" is a beloved Japanese anime about a robotic cat from the future who travels back in time to help a young boy named Nobita. Together, they go on all sorts of adventures and learn valuable life lessons along the way. The show's charm lies in its heartwarming stories and endearing characters, making it a favorite among children and adults alike.

**"The Simpsons"**: "The Simpsons" is an iconic animated sitcom that has been entertaining audiences for decades. The show follows the lives of the Simpson family—Homer, Marge, Bart, Lisa, and Maggie—as they navigate the ups and downs of everyday life in the fictional town of Springfield. Known for its sharp satire and clever humor, "The Simpsons" has become a cultural phenomenon, spawning countless memes and references. Whether you're a longtime fan or new to the series, "The Simpsons" never fails to deliver laughs and entertainment.`
    }
];

    const blogPostsContainer = document.getElementById('blog-posts');

    // Function to render blog posts
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;
        postElement.appendChild(postTitle);

        const postContent = document.createElement('p');
        postContent.textContent = post.content;
        postElement.appendChild(postContent);

        blogPostsContainer.appendChild(postElement);
    });

    // Sample data for recent posts
    const recentPosts = [
    `INTRODUCTION TO THIS BLOG :
Welcome to my blog, where we embark on a journey through the realms of sitcoms, cartoons, and beyond. I'm Jenna, your guide through the wonderful world of entertainment. As a lover of laughter and stories, I've curated an eclectic collection of reviews and insights into some of the most beloved sitcoms and cartoons of our time. From the heartwarming humor of "Friends" to the mischievous antics of "Shinchan," there's something here for everyone to enjoy. Join me as we explore the laughter, the tears, and the timeless lessons found in these beloved shows.

But our journey doesn't stop there. In addition to sitcoms and cartoons, we'll also dive into the world of books, movies, and more. From thought-provoking reads like "12 Rules for Life" to cinematic masterpieces like "Steve Jobs," there's a wealth of entertainment waiting to be discovered.

So sit back, relax, and let's embark on this adventure together. Whether you're looking for a laugh, a tear, or a little bit of both, you'll find it here in the pages of my blog. Let the journey begin!`,
    `OUR GOALS AND VISION:
Welcome to my blog, where the goal is to entertain, inform, and inspire. My mission is to create a space where readers can find joy, laughter, and valuable insights into the world of entertainment. Through reviews, recommendations, and reflections, I aim to foster a sense of community among fans of sitcoms, cartoons, books, movies, and more.

One of the primary goals of this blog is to celebrate the power of storytelling. Whether it's through the witty dialogue of a sitcom, the imaginative animation of a cartoon, or the profound messages found in books and movies, stories have the ability to captivate our hearts and minds. By sharing my thoughts and experiences with various forms of entertainment, I hope to spark conversations and connections among readers who share a love for storytelling.

Another goal of this blog is to promote diversity and inclusivity in entertainment. I believe that everyone deserves to see themselves represented on screen and in literature, and I strive to highlight diverse voices and perspectives in my reviews and recommendations. By showcasing a wide range of stories and creators, I hope to inspire readers to explore new genres, cultures, and experiences.

Ultimately, my mission is to create a welcoming and inclusive space where people from all walks of life can come together to celebrate the magic of entertainment. Whether you're a die-hard fan of sitcoms, a casual viewer of cartoons, or a bookworm looking for your next read, I hope you'll find something here to spark your imagination and brighten your day. Welcome to the journey!`
];

    const recentPostsList = document.getElementById('recent-posts-list');

    // Function to render recent posts
    recentPosts.forEach(postTitle => {
        const postItem = document.createElement('li');
        postItem.textContent = postTitle;
        recentPostsList.appendChild(postItem);
    });

});
