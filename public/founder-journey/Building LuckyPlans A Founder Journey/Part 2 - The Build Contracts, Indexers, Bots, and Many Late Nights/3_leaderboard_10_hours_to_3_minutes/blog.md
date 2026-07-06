# From 10 Hours to 3 Minutes: Building the LuckyPlans Leaderboard

After the first copy trading proof of concept worked, I had a new problem.

The system could copy a trader.

Great.

But which trader?

A copy trading engine without trader discovery is like a search engine with one result. Technically functional, briefly exciting, and then immediately useless for real decision-making.

That pushed me toward one of the most important early LuckyPlans features: the leaderboard.

At first, I thought it would be simple. A table, a ranking, maybe some filters. Very innocent. Almost suspiciously innocent.

But for LuckyPlans, the leaderboard was not just a product page. It was the beginning of trader discovery.

The copy engine gave the system hands.

The leaderboard gave it eyes.

## Top 10 Was Not Enough

Existing perp DEX leaderboards were useful, but they were too narrow for what I wanted.

A top 10 leaderboard is fine if the goal is to show impressive traders. It works as a highlight reel.

But LuckyPlans needed more than highlights.

I wanted to study many traders, not only the obvious winners. I needed enough history to ask better questions:

Who is consistent?
Who is still active?
Who had one lucky period?
Who performs across different windows?
Who looks good at first glance but weaker after inspection?

Those questions matter because LuckyPlans was never meant to blindly follow one famous address. The plan model needed a broader trader universe.

So I decided to build my own leaderboard.

That was the moment a “simple table” became a data infrastructure problem.

Classic software moment: you start with a table and somehow end up designing a pipeline.

## Indexing the Raw History

The only source I trusted was on-chain history.

Not screenshots.
Not summaries.
Not someone else’s limited ranking.

If LuckyPlans needed a real leaderboard, it had to process real trade events.

So I started fetching trade history from the smart contract deployment date to the present. At that time, Gains Network activity existed across multiple chains, including Polygon, Base, Arbitrum, and ApeChain.

That turned the leaderboard into a multi-chain indexing problem.

Different chains. Different block ranges. Different RPC behavior. Different event histories. Different sync states.

Very peaceful work, if your definition of peace includes checking logs and wondering why one chain decided to develop a personality today.

In the beginning, I followed the Gains Network event type system because it was practical. Before designing a perfect internal model, I needed to capture the raw truth.

Fetch events. Decode them. Store them. Calculate trader performance.

Simple sentence.

Large amount of pain hiding inside it.

## The First Build: 10GB, 10 Hours

The first full historical build worked.

That was good.

It was also painful.

The trade history database grew to almost **10GB**, and building the leaderboard from historical logs took almost **10 hours**.

At first, I was happy. The data was there. The leaderboard existed. LuckyPlans had started turning on-chain history into something usable.

Then the obvious problem arrived:

A leaderboard that takes 10 hours to rebuild is not really a leaderboard.

It is a scheduled emotional event.

For LuckyPlans, that was not acceptable. The leaderboard was not decoration. It would support trader discovery, plan creation, simulation, and eventually strategy research. It needed to stay fresh.

Rebuilding everything from zero every time was not a strategy.

It was a confession.

The first version proved the data could be processed.

Now I had to make it usable.

## The Dynamic Leaderboard

The key question was simple:

**What actually changes each day?**

Most historical data does not change. Yesterday’s closed trades do not need to be rediscovered. Last month’s events do not need to be reprocessed just because today exists.

So I redesigned the leaderboard around incremental updates.

The first full build still had to be heavy. There was no way around processing the complete history once. But after that, the system only needed to ask:

**What changed since the last snapshot?**

That changed everything.

LuckyPlans could carry forward previous leaderboard values, apply new daily activity, update accumulated performance, and save the next snapshot.

The result was a major improvement:

**From almost 10 hours to less than 3 minutes.**

That was not just a performance win. It changed what the product could support.

A 10-hour leaderboard is something you tolerate.

A 3-minute leaderboard is something you can build on.

Now LuckyPlans could maintain daily rankings, expose a broader trader universe, and keep the data fresh enough for discovery and simulation.

The leaderboard had moved from batch pain to usable infrastructure.

## Why It Mattered

This feature made LuckyPlans more than a copy trading executor.

The executor answered:

**Can the system copy a trade?**

The leaderboard answered:

**Who should the system study first?**

That was a much better product question.

The leaderboard gave LuckyPlans memory. It turned scattered on-chain events into structured trader history. It created a discovery layer beyond the top few winners. It became the foundation for comparing behavior, building plans, and eventually testing ideas before real execution.

That was the important shift.

LuckyPlans was not supposed to say:

**“This trader looks profitable. Follow him.”**

It needed to say:

**“Here is the data. Here is the behavior. Now we can compare.”**

That is a very different product.

Less magical.

Much more useful.

## The Lesson

A leaderboard sounds simple from the outside.

Rank traders by profit.
Show a table.
Add filters.
Done.

In reality, LuckyPlans needed multi-chain indexing, historical event processing, database design, snapshot logic, duplicate protection, and incremental updates just to make that table reliable.

That was the real work.

And solving it changed the product.

After the dynamic leaderboard, LuckyPlans had more than an executor. It had a data layer, a history layer, and the beginning of trader discovery.

The copy engine proved LuckyPlans could react.

The leaderboard helped LuckyPlans understand what was worth reacting to.

Going from **10 hours to 3 minutes** made the system feel less like a side experiment and more like infrastructure that could actually grow.
