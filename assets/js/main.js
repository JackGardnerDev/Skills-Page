// Calender
GitHubCalendar(".calendar", "JackGardnerDev");

// or enable responsive functionality:
GitHubCalendar(".calendar", "JackGardnerDev", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "JackGardnerDev", {
    proxy (username) {
    return fetch(`https://your-proxy.com/github?user=${username}`)
    }
}).then(r => r.text())

// Feed
GitHubActivity.feed({
    username: "JackGardnerDev",
    repository: "CleaverBlog", // optional
    selector: "#feed",
    limit: 20, // optional
});