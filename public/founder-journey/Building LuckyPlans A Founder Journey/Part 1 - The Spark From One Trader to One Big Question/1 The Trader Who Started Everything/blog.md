# The Trader Who Started Everything

LuckyPlans did not start with a pitch deck, a market thesis, or a carefully prepared founder story.

It started with a leaderboard that made me stop scrolling.

Around May 2024, I was working as a frontend engineer on a perp DEX project for the Botanix chain. The product was based on a Gains Network-style perp engine, and my work was close to the interface layer: building trading pages, connecting smart contract data, wiring transactions with wagmi and viem, and turning protocol complexity into something a user could actually operate.

It was technical work, but familiar technical work.

Then I opened the Gains Network leaderboard and saw one trader with more than **$500K** in realized profit, a very high win rate, and a public history I could inspect directly.

That last part mattered.

This was not a screenshot.
Not a marketing thread.
Not a cropped PnL image with the inconvenient context removed.

It was on-chain.

The address was visible. The trades were visible. The history was visible. The profit was visible.

Crypto has no shortage of confidence. Evidence is rarer.

So my first reaction was simple:

**“Is this real?”**

And then, almost immediately, the more dangerous question followed:

**“If it is real, can I copy him?”**

That was the first LuckyPlans moment.

Not a product yet. Not a company. Not even a plan.

Just one uncomfortable question sitting inside public data.

## The Shift

The idea was attractive because it looked obvious.

A trader opens a position.
The protocol emits an event.
The event is public.
A system can watch it.
A system can react.

That chain of logic was simple enough to be exciting, and simple enough to be suspicious.

At the time, I did not yet understand all the details that would later make the idea difficult: execution delay, sizing mismatch, RPC reliability, liquidity, slippage, fees, trader behavior changes, and the painful difference between observing a good trade and copying it well.

But the first insight was not about those details.

The first insight was about transparency.

In traditional trading, you rarely get this kind of visibility. You may see performance claims, signals, fund summaries, or commentary after the fact, but the actual behavior is usually hidden behind private systems and polished reporting.

On-chain trading changes the surface area.

Trader behavior leaves a trail. It is not perfectly clean, and it does not explain itself automatically, but it is visible enough to study.

That changed how I saw the leaderboard.

Before that moment, a leaderboard was just a ranking.

After that moment, it looked like raw material.

A trader address was not only a wallet. It was a behavioral record.
An event log was not only backend noise. It was a possible signal.
A public trading history was not only a stat page. It was something that could be organized, tested, and maybe turned into a product.

The original question was:

**“Can I copy this trader?”**

But the deeper question was already forming:

**“Can public trading behavior become usable infrastructure?”**

That was the real beginning.

## The Second Look

I did not start building immediately.

I continued my normal work. There were still features to ship, contracts to connect, and enough frontend details to remind me that software never pauses politely because you had an idea.

But the question kept returning.

A few months later, after August 2024, I checked the same trader again.

I expected the story might have faded. Maybe the first result was just a good period. Maybe the market had been favorable. Maybe the leaderboard had captured a temporary anomaly.

But the trader was still active.

Still profitable.

Still growing.

The total profit was getting close to **$1M USDC**.

That changed the weight of the idea.

The first time, it was curiosity.
The second time, it became a missed-opportunity question.

**“What would have happened if I had copied him earlier?”**

That is not always a healthy question, but it is a powerful one. It forces you to stop treating the idea as abstract. Suddenly, the gap between observation and action becomes visible.

I did not yet know whether the idea would work. I did not know whether it could become a product, or whether copying public trader behavior would survive real execution conditions.

But I knew the question was strong enough to investigate.

## Why It Mattered

Looking back, the trader himself was not the important part.

He was the trigger.

What mattered was the change in perspective.

I stopped seeing on-chain trading data as something that only supported interfaces and dashboards. I started seeing it as a product layer by itself.

Public trading history could support discovery.
Discovery could support comparison.
Comparison could support plans.
Plans could support simulation.
Simulation could eventually support safer execution.

That chain was not clear yet, but the direction was there.

At the beginning, LuckyPlans was not born from certainty. It was born from a question that was too interesting to ignore and too practical to leave as a note in my head.

One trader made the data feel alive.

The rest of the journey started from that.
