# Submission instructions

Follow this workflow to hand in the VueShop homework. It mirrors a real team
process: feature branch → Pull Request → code review → merge.

## 1. Create a GitHub account

If you don't have one yet, sign up at [github.com](https://github.com/).

## 2. Create a repository for the homework

Create a new repository for this assignment. It can be **public** or **private**.

- If you make it **private**, please add me as a collaborator so I can review it:
  **mateusz@matt-dev.pl**

## 3. Clone the repo and work on a feature branch

Clone your repository and create the working branch `feature/US-1` **off `main`**:

```bash
git clone <your-repo-url>
cd <your-repo>
git checkout main
git checkout -b feature/US-1
```

Do all your work on `feature/US-1`.

## 4. Submit in parts or all at once

You may deliver the task **incrementally** (several commits over time) or **in one go** -
whatever suits you.

## 5. Write clear commit messages

Use this format:

```
feature(US-1): verb + what is done
```

Examples:

```
feature(US-1): add product catalog with search and filters
feature(US-1): implement shared cart composable
feature(US-1): persist cart to localStorage
feature(US-1): add checkout form validation
```

## 6. Open a Pull Request and request review

When development is finished, push your branch and open a **Pull Request**
from `feature/US-1` into `main`. Set **me as the reviewer** and wait for the
code review.

```bash
git push -u origin feature/US-1
```

## 7. Apply review feedback

After the code review, address the comments, push the fixes, and **request another
review**.

## 8. Iterate until approved

Repeat the review → fix → re-review loop until the Pull Request gets an **approval**.

## 9. Merge into `main`

Once approved, **merge** the homework into `main`.

This merge officially completes **Part 1** of the Vue course. :)
