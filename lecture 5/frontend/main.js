const coursesDiv = document.getElementById("courses-wrapper")

fetch("http://localhost:3000/api/courses")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(courses => {
        console.log(courses);

        courses.forEach(course => {
            const courseEl = document.createElement("div");
            courseEl.classList.add("course"); // لو عايز تعمل ستايل
            courseEl.innerHTML = `
            <h3>name: ${course.title}</h3>
            <p>Price: $${course.price}</p>
          `;
            coursesDiv.appendChild(courseEl);
        });
    })
    .catch(error => {
        console.error("Error fetching courses:", error);
        coursesDiv.innerHTML = "<p>Failed to load courses</p>";
    });


//course details
const form = document.getElementById("course-details-form");
const inputId = document.getElementById("input-details-id");
const detailsDiv = document.getElementById("details-course");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = inputId.value.trim();
    if (!id) {
        detailsDiv.innerHTML = "<p>Please enter a course id</p>";
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/courses/${id}`);
        if (!response.ok) {
            throw new Error("Course not found");
        }
        const course = await response.json();

        // عرض بيانات الكورس
        detailsDiv.innerHTML = `
            <h2>${course.title}</h2>
            <p>Price: $${course.price}</p>
            <p>Course ID: ${course.id}</p>
        `;
    } catch (error) {
        detailsDiv.innerHTML = `<p>${error.message}</p>`;
    }
});

//post course
const postForm = document.getElementById("post-course-form");
const inputTitle = document.getElementById("input-title");
const inputPrice = document.getElementById("input-price");
const detailsPost = document.getElementById("details-post-course");

postForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = inputTitle.value.trim();
    const price = inputPrice.value.trim();

    if (!title || !price) {
        detailsPost.innerHTML = "<p>Please fill in all fields</p>";
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/api/courses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: title, price: price }),
        });

        if (!response.ok) {
            throw new Error("Failed to add course");
        }

        const newCourse = await response.json();
        detailsPost.innerHTML = `
            <h2>New Course Added</h2>
            <p>ID: ${newCourse.id}</p>
            <p>Title: ${newCourse.title}</p>
            <p>Price: $${newCourse.price}</p>
        `;
        postForm.reset();
    } catch (error) {
        detailsPost.innerHTML = `<p>${error.message}</p>`;
    }
});
