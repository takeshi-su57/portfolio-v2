# Five Months, Four Hours a Night, and One Working MVP

By March 2025, LuckyPlans had crossed an important line.

It was no longer a local script, a research note, or a proof of concept that only worked when I was watching it carefully like a nervous parent. It had become a working MVP deployed on a VPS with **8GB RAM, 160GB NVMe storage, and a stable network connection**.

Not exactly a data center empire.

But enough.

The system was still running on testnet with mock assets, and I was clear with myself that it was not ready for real funds. But the core loop was finally there: LuckyPlans could listen to on-chain events, process copy trading logic, manage bots, organize them into plans, and open copied positions in a controlled environment.

For the first time, LuckyPlans was not only an idea I believed in.

It was a system that could run.

## From Proof of Concept to Product Shape

The first proof of concept had answered one important question:

**Can an on-chain trader event become a copied testnet position?**

The answer was yes.

That was exciting, but it was also only the beginning. A proof of concept can survive with hardcoded values, rough assumptions, and a developer who remembers which script to run in which order. A product cannot.

After the POC, the question changed from:

**“Can I copy one event?”**

to:

**“What system needs to exist around this?”**

That was a much larger problem.

LuckyPlans needed persistent state, event history, bot management, plan management, GraphQL APIs, database models, indexing jobs, and a frontend direction. It also needed to run continuously instead of depending on me to manually wake it up like a part-time robot.

This was the stage where the project became serious. Not because it looked beautiful, but because the internal structure started to support a real product.

The executor proved the reaction was possible.

The MVP had to prove the reaction could belong inside a system.

## Why Plans Became the Core Model

One of the most important decisions during this stage was making **plans** the central product model.

A basic copy trading setup can be very direct: one bot follows one trader. That model is easy to explain, but it felt too limited for the direction I wanted.

LuckyPlans was not meant to depend on a single hero trader.

I wanted users to organize multiple bots under one plan. Each bot could represent a trader-following relationship or a specific copy behavior. A plan could combine them, assign structure, and make the whole system easier to reason about.

That changed the product from a collection of bots into something more intentional.

A plan could represent a strategy. It could include multiple traders. It could use different ratios. It could be paused, changed, tested, improved, or compared over time.

This was when the name **LuckyPlans** started to feel correct.

The product was not only about copying trades. It was about building structured plans from public trader behavior.

That difference mattered.

Copying is an action.

Planning is a system.

## Building at Night Without Breaking the Day

The first MVP took around five months to build.

This was not full-time founder mode. I still had my professional work during the day, and I treated that responsibility seriously. LuckyPlans had to fit outside that schedule.

Most of the work happened at night, usually around four hours a day.

During the day, I worked on my company responsibilities. At night, I worked on LuckyPlans: backend services, database models, indexers, bot logic, plan structure, deployment, and testnet execution.

That rhythm was not glamorous. Some nights produced real progress. Some nights produced only a better understanding of why the system was broken. Some nights the main achievement was discovering that a bug had three parents and all of them were my code.

But the rhythm worked.

Four hours does not sound like much in one day. Over five months, it becomes serious. That is the quiet math of building: small blocks of focused time, repeated long enough, eventually become infrastructure.

I did not have a team. I did not have unlimited time. I did not have perfect conditions.

I had a direction, a schedule, and enough stubbornness to keep returning to the same problem after work.

That was enough to reach the first MVP.

## The Server Finally Had a Heartbeat

One of the most satisfying moments was watching LuckyPlans run on the VPS.

The server was modest, but the system finally had a heartbeat.

The backend listened for on-chain events.
The indexer collected activity.
The copy logic processed actions.
Bots reacted to trader behavior.
Plans organized those bots.
The executor opened copied positions on testnet.

To someone else, the logs probably looked boring.

To me, they looked like movement.

A new event appeared. The system noticed it. The backend processed it. A bot reacted. The plan structure made sense. The execution flow completed.

That was the first time I could see the pieces connecting without manually holding the entire system together.

It was not perfect. It still needed better monitoring, safer state handling, stronger recovery logic, and a lot of production hardening. But it was no longer scattered code.

It was running.

And when a side project starts running on its own server, even a small one, it begins to feel less like an experiment and more like a responsibility.

## Why Testnet Was the Correct First Home

LuckyPlans was still using testnet and mock assets at this stage, which was exactly where it belonged.

Technically, the architecture could move toward real trading later once real USDC was funded to the connected Arbitrum address. But I did not want to treat that as a small configuration change.

In trading software, “almost correct” is not a comfortable category.

A backend bug in a normal SaaS product might create a broken page or a bad user experience. A backend bug in a copy trading system can create the wrong position, wrong size, wrong direction, wrong leverage, or wrong timing.

That is not a bug report.

That is a financial event.

So testnet was not a limitation. It was the right checkpoint. It allowed me to validate the core behavior without pretending the system had already earned the right to touch real capital.

Before real money, LuckyPlans needed stronger monitoring, safer execution, better risk controls, reliable recovery, and more evidence.

The MVP was not the finish line.

It was the first serious proof that the foundation existed.

## What the First MVP Proved

By March 2025, LuckyPlans had several important foundations in place.

It had backend architecture, database models, on-chain event indexing, leaderboard infrastructure, bot management, plan management, testnet execution, and deployment.

More importantly, it had a product shape.

The question was no longer only whether copy trading could technically work. The larger question had become whether LuckyPlans could become a structured product around trader discovery, bot organization, plan creation, simulation, and eventually safer copy trading execution.

The first MVP did not answer all of that.

But it made the answer feel possible.

That was the value of this milestone. It did not prove the business. It did not prove profitability. It did not prove the system was ready for capital.

It proved that the foundation could exist.

And for a project built at night, after work, with limited time and no team, that mattered.

## The Lesson

This stage taught me that building a product is not only about speed. It is about rhythm, responsibility, and staying consistent long enough for the pieces to connect.

Progress rarely looks dramatic while it is happening.

Sometimes it is one database model after work. One indexer bug fixed late at night. One failed transaction finally understood after midnight. One deployment improvement before sleeping. One more small connection between parts of the system that previously lived separately.

Then, after enough nights, the project becomes real.

That was what March 2025 represented.

LuckyPlans was not finished. It was not ready for real capital. It was not yet the product I imagined.

But it was alive, deployed, and working.

After five months, four hours a night, and a lot of stubborn consistency, LuckyPlans had its first real MVP.

Not perfect.

Not public.

Not safe for mainnet execution.

But real enough to make the next stage unavoidable.
