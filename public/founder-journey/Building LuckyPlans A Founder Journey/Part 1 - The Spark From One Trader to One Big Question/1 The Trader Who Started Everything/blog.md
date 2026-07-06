# The Trader Who Started Everything

LuckyPlans did not begin with a pitch deck, a business plan, or a clean product roadmap.

It started with one trader on a leaderboard.

Around May 2024, I was working as a frontend engineer on a perp DEX project built for the Botanix chain. The product was based on a Gains Network-style perp DEX engine, with its own network context and additional features. My role was mostly frontend: building pages, wiring smart contract data into the UI, implementing trading flows, and making the product usable for real traders.

I already had experience integrating frontend apps with smart contracts using wagmi and viem, so that part felt familiar. The workflow was technical, but not mysterious: read contract data, understand events, connect the interface, ship the feature.

Then one day, while looking through the Gains Network platform more carefully, I opened the leaderboard.

That was when I saw him.

A trader with a very high win rate, massive realized profit, and more than **$500K** in visible gains.

My first reaction was not strategic. It was much simpler:

**“Wait… is this real?”**

This was not a screenshot on Twitter. It was not a cropped PnL flex with half the context missing. It was not some anonymous trading story floating around Telegram.

It was on-chain.

The address was there.
The trades were there.
The history was there.
The profit was visible.

That changed the feeling completely.

Crypto is full of people saying they are profitable. Most of the time, you need either trust, luck, or a very strong tolerance for marketing. But here, the evidence was sitting in public. I could inspect it directly.

At first, I was surprised.

Then I became curious.

Then the dangerous developer question appeared:

**“If this trader is doing so well, and the data is public… can I just copy him?”**

It was a funny question. Almost too simple.

But the simplicity was exactly what made it powerful.

## The Hidden Door in Public Data

The first version of the idea had no architecture behind it.

No backend design.
No product name.
No simulation system.
No leaderboard engine.
No risk model.
No serious plan.

Just a chain of thoughts:

If a trader opens a position on a perp DEX, an event is emitted.
If the event is public, a system can detect it.
If a system can detect it, maybe it can react.
If it can react fast enough, maybe it can copy.

That was the entire early thesis.

Very clean.

Suspiciously clean.

But it gave me energy because it revealed something interesting about on-chain markets. In traditional trading, this kind of behavior is usually hidden. You do not easily see what another trader is doing in real time, with verifiable history attached to the same identity.

On-chain trading changes that.

Transactions are public. Events are public. Addresses are public. Historical behavior can be inspected. That does not make everything easy, but it does create a product surface that does not exist in the same way in traditional finance.

That was the real spark for me.

Not only the profit number.

The bigger realization was:

**Public trading behavior might be productized.**

That idea was more interesting than a single trader. The trader was the doorway, but the data behind him was the actual room.

## The Second Check

I did not start building immediately.

The idea stayed in the background while I continued normal work. I still had features to ship, contracts to connect, and enough frontend details to remind me that “one quick UI change” is usually a trap.

But the question kept coming back.

Every time I looked at trading events or on-chain activity, I started thinking about whether those actions could become signals. Every time I checked a leaderboard, I wondered whether it was only a ranking table or something closer to an opportunity map.

After August 2024, I checked the same trader again.

I wanted to know whether the first impression had been temporary. Maybe he had benefited from a short market window. Maybe the leaderboard was showing one lucky period. Maybe the story had already ended.

It had not.

He was still active.
Still winning.
Still growing.

His total profit was getting close to **$1M USDC**.

That second check mattered more than the first one.

The first time, I saw a surprising number. The second time, I saw persistence. The idea moved from “interesting anomaly” to “maybe there is a real pattern here.”

Then came the question that made the whole thing harder to ignore:

**“What would have happened if I had copied him earlier?”**

That question is dangerous because it turns curiosity into regret, and regret into motivation. Not always the healthiest fuel, but it burns very efficiently.

## The Dream Stage

At this point, I was still in the clean version of the idea.

The version before edge cases.

The version before RPC issues, execution delays, sizing mismatch, market regimes, liquidity, fees, slippage, trader behavior shifts, and every other lesson that later arrived with excellent timing and terrible manners.

The early idea still looked simple:

Find strong traders.
Watch public events.
Copy positions.
Repeat.

Later, I would learn that every word in that sentence hides a full engineering and trading problem. But in the beginning, the idea felt elegant because I had not yet paid for the details.

That is part of why early ideas are so exciting. They are not fully wrong, but they are incomplete enough to feel easy.

And still, the possibility was real enough to explore.

I did not know whether it could become a product. I did not know whether it could become a company. I did not know whether copying a trader this way would actually work under real conditions.

But I knew the question was worth testing.

## Why That Trader Mattered

Looking back, that trader mattered less as a person and more as a trigger.

Before that moment, a leaderboard was just a leaderboard: a ranking, a stats page, a place to see who was performing well.

After that moment, I started seeing it differently.

A leaderboard could be a discovery layer.
A trader address could be a behavioral history.
An on-chain event could be a signal.
A public trading record could become the starting point for a system.

That shift changed how I looked at the whole space.

The first question was simple:

**“Can I just copy him?”**

But behind it were larger questions:

Can public trading history become usable infrastructure?
Can trader behavior be monitored, organized, and tested?
Can on-chain data support a better way to explore copy trading ideas?
Can a system move from observing traders to building plans around them?

I did not have those answers yet.

At that stage, I only had the spark, the trader, the leaderboard, and a question that would not leave me alone.

That was enough to start.

LuckyPlans began from one trader, one visible history, and one slightly dangerous thought:

**“Wait… can I just copy him?”**
