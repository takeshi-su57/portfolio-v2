# From 10 Hours to 3 Minutes: Building the LuckyPlans Leaderboard

After the first copy trading proof of concept worked, I had a new problem.

I could copy a trader.

That was exciting, but also not enough.

A copy trading system without trader discovery is like a search engine with one result. Technically useful, emotionally impressive for about five minutes, and then immediately a product problem.

The next question was obvious:

**How do I find enough traders worth studying?**

That question pushed LuckyPlans toward one of its most important early features: the leaderboard.

At first, I thought the leaderboard would be a product page. A table, a ranking, a clean way to show profitable traders.

That was too small.

For LuckyPlans, the leaderboard was not decoration. It was not a marketing screen. It was the beginning of trader discovery, and trader discovery was the foundation for everything that came after: bots, plans, simulations, strategy ideas, and eventually copy trading decisions.

The copy engine could move.

Now the system needed eyes.

## Top 10 Was Not a Product Surface

Existing perp DEX leaderboards were useful, but they were not built for the kind of system I wanted to create.

Gains Network, for example, showed a limited group of top traders. That makes sense if the goal is to highlight impressive performance. A top 10 leaderboard is clean, simple, and easy to understand.

But LuckyPlans needed more than a highlight reel.

The original idea had already moved beyond copying one famous trader. I wanted to build plans from multiple traders, with different weights, different behaviors, and eventually different strategy assumptions.

For that, I needed a wider trader universe.

Not only the obvious winners.
Not only the top 10.
Not only the people already sitting under the spotlight.

I needed enough historical data to ask better questions.

Who is consistent? Who is still active? Who had one lucky period and then disappeared? Who performs well across different windows? Who might be useful inside a multi-trader plan? Who looks good at first glance but becomes much less attractive when you inspect the history?

Those are not questions a small leaderboard can answer.

So I decided to build my own.

This was the moment the leaderboard stopped being a table and became infrastructure.

## The Only Real Source Was On-Chain History

If I wanted a real leaderboard, I needed real history.

Not screenshots.
Not API summaries I could not fully verify.
Not someone else’s small ranking.

The source had to be on-chain events.

So I made a simple but heavy decision: fetch all trade history events from the smart contract deployment date to the present.

At that time, Gains Network activity existed across multiple chains, including Polygon, Base, Arbitrum, and ApeChain. That meant the problem was not “query some trades and sort them.”

It became a multi-chain indexing problem.

Different chains.
Different block ranges.
Different RPC behavior.
Different contracts.
Different event histories.
Different sync states.

Very friendly. Very relaxing. Exactly the kind of thing you start when you think, “This should just be a leaderboard.”

In the beginning, I did not try to invent a perfect abstraction. I followed the Gains Network event type system first because it was the practical choice. Before designing a beautiful internal model, I needed to capture the raw truth.

The first job was straightforward in concept:

Fetch the events, decode them, store them, and calculate trader performance.

Straightforward in concept is doing a lot of work in that sentence.

## The First Build Was Painful

The first historical build worked, but it was heavy.

The trade history database grew to almost **10GB**.

Building the leaderboard from historical logs took almost **10 hours**.

At first, I was happy because the system was finally collecting real data. The database was filling. The calculations were running. The leaderboard was no longer an idea; it was becoming visible.

Then the engineering reality arrived, as it always does, usually without knocking.

A leaderboard that takes 10 hours to rebuild is not a leaderboard. It is a scheduled emotional event.

For LuckyPlans, this was not acceptable. The leaderboard was not just a page users might open sometimes. It was part of the product’s source of truth. It would support trader discovery, influence plan creation, and eventually become part of the research and simulation workflow.

It needed to be fresh.

If I wanted to update it daily, rebuilding everything from zero every time was not a strategy. It was a slow-motion confession that I had built the wrong process.

The first version proved that the data could be processed.

The second challenge was making it usable.

## The Feature Became a Data Problem

This was where the leaderboard became much more interesting technically.

I had to stop thinking about it as a frontend feature and start treating it as a data pipeline.

The real questions were not about table design. They were about state, history, and incremental computation.

How do I process full historical data once and avoid doing it again? How do I prevent duplicate logs? How do I support multiple chains without losing track of sync progress? How do I calculate trader performance by day? How do I create leaderboard snapshots efficiently? How do I update rankings without scanning the entire history every time?

The naive approach was easy: rebuild from the beginning every day.

The naive approach also took 10 hours.

So I spent around three days thinking through a better design. The key question became:

**What actually changes each day?**

That question unlocked the solution.

Most of the historical data did not change. Yesterday’s closed trades did not need to be rediscovered. Last month’s events did not need to be reprocessed. The system only needed to understand what happened since the previous snapshot and apply those changes correctly.

That sounds obvious after the fact.

Most good optimizations do.

Before the fact, they hide behind a 10-hour job and make you question your career choices.

## The Dynamic Leaderboard

The solution was a dynamic leaderboard system.

The first full build still had to be heavy. There was no shortcut around processing the historical data once. If I wanted a complete foundation, I had to pay the initial cost.

But after that, the system no longer needed to ask:

**“What happened from the beginning of time?”**

It only needed to ask:

**“What changed since the last snapshot?”**

That changed everything.

The system could carry forward previous leaderboard values, apply new daily activity, update accumulated performance, and save the next snapshot. Instead of rebuilding history every time, LuckyPlans could maintain history intelligently.

The result was a major improvement:

From almost **10 hours** to less than **3 minutes**.

That was not just a performance win. It changed what the product could become.

A 10-hour leaderboard is something you tolerate.
A 3-minute leaderboard is something you can build on.

Now LuckyPlans could support daily trader rankings. It could expose a much wider trader universe. It could keep the data layer fresh enough to support discovery, simulation, and eventually strategy research.

The system had moved from batch pain to usable infrastructure.

That felt like a real breakthrough.

## Why the Leaderboard Mattered

Looking back, the leaderboard was one of the first features that made LuckyPlans feel bigger than a copy trading executor.

The executor answered one question:

**Can the system copy a trade?**

The leaderboard answered a better question:

**Who should the system even study?**

That made it foundational.

It gave LuckyPlans memory. It turned scattered on-chain events into structured history. It created a way to explore trader behavior beyond the obvious top performers. It gave the product a discovery layer instead of forcing everything to depend on one exciting address.

That mattered because the long-term idea was never supposed to be blind following.

The real product direction was more careful:

Observe first.
Measure first.
Compare first.
Then build a plan.

The leaderboard became the first serious step in that direction.

It took public event logs and turned them into something closer to trading intelligence.

Not perfect intelligence. Not final proof. But a structured starting point.

And that starting point was essential.

## The Lesson

This feature taught me that simple product ideas often hide serious data problems.

A leaderboard sounds easy from the outside.

Rank traders by profit.
Show a table.
Add some filters.
Done.

But for LuckyPlans, the leaderboard required multi-chain indexing, historical event processing, database design, daily snapshots, duplicate protection, incremental updates, and enough performance work to keep the system usable.

That was the real work.

And solving it changed the project.

After the dynamic leaderboard, LuckyPlans was no longer just a copy trading proof of concept. It had a data layer. It had history. It had a source of truth. It had the beginning of trader discovery.

The copy engine proved LuckyPlans could react.

The leaderboard helped LuckyPlans understand what to react to.

That was a very different kind of progress.

And going from 10 hours to 3 minutes made the product feel less like a personal experiment and more like something that could actually scale.
