<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site contact info, social links, testimonial IDs and session fee live in src/lib/site.ts — single source so content edits touch one file.
- Payments use Razorpay client checkout keyed by VITE_RAZORPAY_KEY_ID; success redirects to /thank-you.
