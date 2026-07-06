# The First Testnet Position That Made Me Almost Yell

After a month of reading contracts, tracing events, and trying to understand how the perp DEX engine actually worked, I reached the point where research was no longer enough.

I needed proof.

Not a polished dashboard.
Not a beautiful product flow.
Not a user-friendly interface with carefully designed empty states.

Just one thing:

**Detect a leader trader’s on-chain action and open a copied position from it.**

If that worked, LuckyPlans would move from “technically imaginable” to “actually possible.”

That was the only milestone that mattered.

## The First Version Was Not Pretty

The first proof of concept was not a real application.

There was no UI, no onboarding, no plan editor, no analytics page, and definitely no chart designed to make me look smarter than I was.

It was closer to an internal engine than a product.

That was intentional.

At that stage, I did not need the system to look good. I needed it to move correctly.

The first loop was simple in theory:

A leader opens a position.
The indexer detects the event.
The parser extracts the relevant trade data.
The position manager decides what the follower should do.
The executor sends the copied transaction.
A follower position opens.

On paper, this looks clean.

In real code, every arrow in that flow hides a small argument with reality.

Which event is the reliable source?
Which values come directly from the chain?
Which values need to be normalized?
How should the follower size the position?
What happens if timing is off?
What happens if the transaction fails?

This was the first time LuckyPlans became more than an idea. It became a system with moving parts, and moving parts have a habit of revealing exactly where your understanding is weak.

## Testnet Was the Right Place to Break Things

Gains Network had testnet contracts, which was extremely useful at this stage.

Copy trading is not the kind of feature where you want to “just try it in production and see what happens.” That sentence is already dangerous in normal software. In trading software, it is basically a donation strategy.

A small mistake could mean the wrong pair, wrong direction, wrong leverage, wrong collateral size, or wrong timing. Even when the logic looks reasonable, the market does not offer refunds for developer optimism.

So testnet became the playground.

I could send bad transactions, inspect failures, adjust the parser, fix the execution logic, and try again without turning every bug into a financial event.

That made the work much easier psychologically. The goal was not to avoid mistakes. The goal was to find them in the cheapest environment possible.

Testnet gave me room to be wrong safely.

And at this stage, that was exactly what I needed.

## The First Working Flow

For about a month, I worked on the proof of concept.

A lot of it was hardcoded. Some parts were rough. The structure was not something I would proudly present as a final architecture. But that was fine. The goal was not elegance. The goal was to validate the hardest assumption.

Could LuckyPlans observe a leader’s on-chain behavior and turn it into a copied trade?

Eventually, one day, the loop worked.

A leader event came in.
The indexer caught it.
The backend processed it.
The executor sent the transaction.
The copied position opened on testnet.

I stared at the logs first.

Then I checked the position.

Then I checked again, because the first rule of emotional debugging is never trust your own excitement.

But it was there.

The position was real. Not manual. Not fake. Not only a database record pretending to be progress. It was an actual copied position opened through the first LuckyPlans flow.

That was the moment I almost yelled.

Maybe I did yell a little.

Professional engineering has limits.

## Why One Testnet Position Mattered

From the outside, this was not an impressive launch.

There were no users. No revenue. No landing page. No public announcement. No clean dashboard. Just one copied position on testnet from a rough internal system.

But for me, it was a major milestone.

That one position proved that the previous research was not just theoretical. The contract reading mattered. The event tracing mattered. The backend structure mattered. The executor logic mattered.

Most importantly, the core idea had moved from observation to action.

LuckyPlans had watched something happen on-chain, interpreted it, and responded with a copied trade.

That was the first time the system felt alive.

Not production-ready.
Not safe for real funds.
Not even close to complete.

But alive.

For a builder, that kind of moment changes the project. Before it, you are still negotiating with uncertainty. After it, the question becomes more practical:

How do I make this reliable?
How do I manage state properly?
How do I support more traders?
How do I organize bots and plans?
How do I build the real system around this first working loop?

The POC did not solve the product.

It made the product unavoidable.

## The Lesson

The first copied testnet position taught me that an early demo does not need to be beautiful. It needs to attack the riskiest assumption.

For LuckyPlans, the riskiest assumption was not whether I could build a clean frontend. I already knew I could do that.

The real question was whether a system could observe a trader’s on-chain action and turn it into a copied position.

The first POC answered that question.

It was rough, script-like, and absolutely not ready for public use. But it worked.

And when the hardest part works for the first time, the project changes shape.

That was the moment LuckyPlans stopped being research.

The engine had moved.

Now I had to build the real system around it.
