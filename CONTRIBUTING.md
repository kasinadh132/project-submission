Contributing to this repository

Getting started

Before you begin:

* This site is powered by Node.js. Check to see if you're on the version of node we support.
* Have you read the code of conduct?
* Check out the existing issues & see if we accept contributions for your type of issue.

Use the 'make a contribution' button
Navigating a new codebase can be challenging, so we're making that a little easier. As you're using docs.github.com, you may come across an article that you want to make an update to. You can click on the make a contribution button right on that article, which will take you to the file in this repo where you'll make your changes.

Before you make your changes, check to see if an issue exists already for the change you want to make.

Don't see your issue? Open one
If you spot something new, open an issue using a template. We'll use the issue to have a conversation about the problem you want to fix.

Note: We cannot accept contributions to the REST API reference documentation. If you spot an inaccuracy in the REST API reference documentation, open an issue in the github/rest-api-description repository.

Ready to make a change? Fork the repo
You'll want to install Git LFS.

Fork using GitHub Desktop:

Getting started with GitHub Desktop will guide you through setting up Desktop.
Once Desktop is set up, you can use it to fork the repo!
Fork using the command line:

Fork the repo so that you can make your changes without affecting the original project until you're ready to merge them.
Fork with GitHub Codespaces:

Fork, edit, and preview using GitHub Codespaces without having to install and run the project locally.
Make your update:
Make your changes to the file(s) you'd like to update. Here are some tips and tricks for using the docs codebase.

Are you making changes to the application code? You'll need Node.js v16 to run the site locally. See contributing/development.md.
Are you contributing to markdown? We use GitHub Markdown.
Open a pull request
When you're done making changes and you'd like to propose them for review, use the pull request template to open your PR (pull request).

Submit your PR & get it reviewed
Once you submit your PR, others from the Docs community will review it with you. The first thing you're going to want to do is a self review.
After that, we may have questions, check back on your PR to keep up with the conversation.
Did you have an issue, like a merge conflict? Check out our git tutorial on how to resolve merge conflicts and other issues.
Your PR is merged!
Congratulations! The whole GitHub community thanks you. ✨

Once your PR is merged, you will be proudly listed as a contributor in the contributor chart.

Keep contributing as you use GitHub Docs
Now that you're a part of the GitHub Docs community, you can keep participating in many ways.

Learn more about contributing:

$Types of contributions 📝
*📣 Discussions
*🪲 Issues
*🛠️ Pull requests
*❓ Support
*🌏 Translations
*⚖️ Site Policy
Starting with an issue
Labels
Opening a pull request
Working in the github/docs repository
Reviewing
Self review
Pull request template
Suggested changes
Windows
Types of contributions 📝
You can contribute to the GitHub Docs content and site in several ways. This repo is a place to discuss and collaborate on docs.github.com! Our small, but mighty 💪 docs team is maintaining this repo, to preserve our bandwidth, off topic conversations will be closed.

📣 Discussions
Discussions are where we have conversations.

If you'd like help troubleshooting a docs PR you're working on, have a great new idea, or want to share something amazing you've learned in our docs, join us in discussions.

🪲 Issues
Issues are used to track tasks that contributors can help with. If an issue has a triage label, we haven't reviewed it yet and you shouldn't begin work on it.

If you've found something in the content or the website that should be updated, search open issues to see if someone else has reported the same thing. If it's something new, open an issue using a template. We'll use the issue to have a conversation about the problem you want to fix.

🛠️ Pull requests
A pull request is a way to suggest changes in our repository.

When we merge those changes, they should be deployed to the live site within 24 hours. 🌍 To learn more about opening a pull request in this repo, see Opening a pull request below.

We cannot accept contributions to the REST API reference documentation. If you spot an inaccuracy in the REST API reference documentation, open an issue in the github/rest-api-description repository.

❓ Support
We are a small team working hard to keep up with the documentation demands of a continuously changing product. Unfortunately, we just can't help with support questions in this repository. If you are experiencing a problem with GitHub, unrelated to our documentation, please contact GitHub Support directly. Any issues, discussions, or pull requests opened here requesting support will be given information about how to contact GitHub Support, then closed and locked.

If you're having trouble with your GitHub account, contact Support.

🌏 Translations
This website is internationalized and available in multiple languages. The source content in this repository is written in English. We integrate with an external localization platform called Crowdin and work with professional translators to localize the English content.

We do not currently accept contributions for translated content, but we hope to in the future.

⚖️ Site Policy
GitHub's site policies are published on docs.github.com, too!

If you find a typo in the site policy section, you can open a pull request to fix it. For anything else, see the CONTRIBUTING guide in the site-policy repo.

Starting with an issue
You can browse existing issues to find something that needs help!

Labels
Labels can help you find an issue you'd like to help with.

The help wanted label is for problems or updates that anyone in the community can start working on.
The good first issue label is for problems or updates we think are ideal for beginners.
The content label is for problems or updates in the content on docs.github.com. These will usually require some knowledge of Markdown.
The engineering label is for problems or updates in the docs.github.com website. These will usually require some knowledge of JavaScript/Node.js or YAML to fix.
Opening a pull request
You can use the GitHub user interface ✏️ for some small changes, like fixing a typo or updating a readme. You can also fork the repo and then clone it locally, to view changes and run your tests on your machine.

Working in the github/docs repository
Here's some information that might be helpful while working on a Docs PR:

Development - This short guide describes how to get this app running on your local machine.

Content markup reference - All of our content is written in GitHub-flavored Markdown, with some additional enhancements.

Content style guide for GitHub Docs - This guide covers GitHub-specific information about how we style our content and images. It also links to the resources we use for general style guidelines.

Content model and content templates - The content model describes the purpose of each type of content we use in GitHub Docs and how to write for each type. The templates allow you to quickly get started with new articles.

Reusables - We use reusables to help us keep content up to date. Instead of writing the same long string of information in several articles, we create a reusable, then call it from the individual articles.

Variables - We use variables the same way we use reusables. Variables are for short strings of reusable text.

Liquid - We use liquid helpers to create different versions of our content.

Scripts - The scripts directory is the home for all of the scripts you can run locally.

Tests - We use tests to ensure content will render correctly on the site. Tests run automatically in your PR, and sometimes it's also helpful to run them locally.

Reviewing
We (usually the docs team, but sometimes GitHub product managers, engineers, or supportocats too!) review every single PR. The purpose of reviews is to create the best content we can for people who use GitHub.

💛 Reviews are always respectful, acknowledging that everyone did the best possible job with the knowledge they had at the time.
💛 Reviews discuss content, not the person who created it.
💛 Reviews are constructive and start conversation around feedback.

Self review
You should always review your own PR first.

For content changes, make sure that you:

 Confirm that the changes meet the user experience and goals outlined in the content design plan (if there is one).
 Compare your pull request's source changes to staging to confirm that the output matches the source and that everything is rendering as expected. This helps spot issues like typos, content that doesn't follow the style guide, or content that isn't rendering due to versioning problems. Remember that lists and tables can be tricky.
 Review the content for technical accuracy.
 Review the entire pull request using the localization checklist.
 Copy-edit the changes for grammar, spelling, and adherence to the style guide.
 Check new or updated Liquid statements to confirm that versioning is correct.
 If there are any failing checks in your PR, troubleshoot them until they're all passing.
Pull request template
When you open a pull request, you must fill out the "Ready for review" template before we can review your PR. This template helps reviewers understand your changes and the purpose of your pull request.

Suggested changes
We may ask for changes to be made before a PR can be merged, either using suggested changes or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.

As you update your PR and apply changes, mark each conversation as resolved.

Windows
This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

Regular Expressions: Windows uses \r\n for line endings, while Unix based systems use \n. Therefore when working on Regular Expressions, use \r?\n instead of \n in order to support both environments. The Node.js os.EOL property can be used to get an OS-specific end-of-line marker.
Paths: Windows systems use \ for the path separator, which would be returned by path.join and others. You could use path.posix, path.posix.join etc and the slash module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write scripts in JavaScript instead of Bash.
Filename too long error: There is a 260 character limit for a filename when Git is compiled with msys. While the suggestions below are not guaranteed to work and could possibly cause other issues, a few workarounds include:
Shorten the path by cloning this repo directly into C:\
Use a different Git client on Windows
Update Git configuration: git config --system core.longpaths true
