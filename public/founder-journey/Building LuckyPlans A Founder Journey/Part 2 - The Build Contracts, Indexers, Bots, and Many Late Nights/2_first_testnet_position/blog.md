# The First Testnet Position That Made Me Almost Yell

After a month of reading contracts, tracing events, and slowly accepting that a perp DEX engine is not “just a few buttons with leverage,” research was no longer enough.

I needed proof.

Not a polished dashboard.
Not onboarding.
Not a beautiful analytics page with charts pretending to be strategy.

Just one thing:

**Detect a leader trader’s on-chain action and open a copied position from it.**

If that worked, LuckyPlans would move from an interesting technical possibility to a system with a real heartbeat.

## No UI, Just the Loop

The first proof of concept was not a product.

There was no plan editor, no user account, no frontend flow, and no carefully designed empty state telling users that their journey was about to begin.

It was mostly engine work.

Indexer.
Parser.
Position manager.
Executor.

That was the loop.

A leader opens a position. LuckyPlans detects the event, understands the trade data, decides what the follower should do, and sends a copied transaction.

Clean on paper.

Less clean in code.

Every step had a hidden question. Which event is the real source of truth? Which values come directly from the chain? Which values need to be reconstructed? How should the follower size the position? What happens if execution is delayed? What happens if the transaction fails?

This was where the idea stopped being theoretical. The system had moving parts now, and moving parts are very good at revealing what you only half-understood.

## Testnet: The Correct Place to Be Wrong

Gains Network had testnet contracts, which made this stage possible.

That mattered because copy trading is not the kind of feature you casually test in production. In a normal app, a bad bug may break a page. In trading software, a bad bug can open the wrong position and quietly become your most expensive QA engineer.

Wrong pair. Wrong size. Wrong direction. Wrong leverage. Wrong timing.

All possible.

All unpleasant.

Testnet gave me a safer place to make those mistakes. I could send bad transactions, inspect failures, adjust the parser, fix the executor, and try again without turning every bug into a financial event.

The goal was not to write perfect code immediately.

The goal was to be wrong cheaply enough to keep learning.

## The First Time It Worked

For about a month, I worked on the proof of concept.

Some parts were hardcoded. Some parts were rough. The structure was not something I would proudly present as final architecture. But that was fine. The goal was not elegance.

The goal was to validate the riskiest assumption:

**Can LuckyPlans observe a leader’s on-chain behavior and turn it into a copied trade?**

Eventually, one day, the loop worked.

A leader event came in. The indexer caught it. The backend processed it. The executor sent the transaction. A copied position opened on testnet.

I checked the logs.

Then I checked the position.

Then I checked again, because emotional debugging is not a reliable verification strategy.

But it was real.

Not manual.
Not fake.
Not only a database record pretending to be progress.

A copied position had opened through the first LuckyPlans flow.

That was the moment I almost yelled.

Maybe I did yell a little.

There are limits to professional silence.

## Why It Mattered

From the outside, it was not a big launch.

No users. No revenue. No public announcement. No clean dashboard. Just one copied testnet position from a rough internal system.

But for the project, it was a major milestone.

The previous month of contract research, event tracing, backend planning, and executor logic had turned into action. LuckyPlans had watched something happen on-chain, interpreted it, and responded with a copied trade.

That changed the question.

Before this, I was asking:

**“Can this actually work?”**

After this, the questions became more practical:

How do I make it reliable?
How do I manage state properly?
How do I support more traders?
How do I organize bots and plans?
How do I build a real system around this loop?

The proof of concept did not solve the product.

It made the product harder to ignore.

## The Lesson

The first copied testnet position taught me that an early demo does not need to be beautiful. It needs to prove the hardest assumption.

For LuckyPlans, the hardest assumption was not whether I could build a clean interface. I already knew I could do that.

The real question was whether a system could observe a trader’s on-chain action and turn it into a copied position.

The first POC answered that question.

It was rough, script-like, and nowhere near public use.

But it worked.

And once the engine moved for the first time, LuckyPlans stopped being research.

It became something I had to build properly.
