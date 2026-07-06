# Five Months, Four Hours a Night, and One Working MVP

By March 2025, LuckyPlans had crossed the line from “interesting technical experiment” to “actual working system.”

It was no longer a local script that only behaved when I was watching it like a nervous parent. It was deployed on a VPS with **8GB RAM, 160GB NVMe storage, and a stable network connection**.

Not exactly a private cloud empire.

But enough.

The system was still running on testnet with mock assets, and I knew clearly that it was not ready for real funds. But the important loop was finally working: LuckyPlans could listen to on-chain events, process copy trading logic, manage bots, organize them into plans, and open copied positions in a controlled environment.

For the first time, LuckyPlans was not only something I believed could exist.

It existed.

## From POC to Product Shape

The first proof of concept had answered one question:

**Can an on-chain trader event become a copied testnet position?**

Yes.

That answer was exciting, but it did not automatically create a product. A proof of concept can survive with hardcoded values, rough assumptions, and a developer who remembers which script needs to run first. A real system needs structure, state, recovery, and enough organization that the founder is not the hidden infrastructure layer.

After the POC, the question changed:

**What needs to exist around this loop?**

LuckyPlans needed persistent state, event history, bot management, plan management, GraphQL APIs, database models, indexing jobs, deployment, and a frontend direction. It had to run continuously, not only when I manually started it and hoped nothing developed a personality overnight.

That was when the project became serious.

Not because it looked polished.

Because the inside started to hold together.

The executor had proved that LuckyPlans could react. The MVP had to prove that the reaction could live inside a real system.

## Plans Became the Core

One of the most important decisions was making **plans** the center of the product.

A simple copy trading setup could be one bot following one trader. Easy to explain, easy to build, and also too limited.

LuckyPlans was not meant to depend on one heroic trader. I wanted users to organize multiple bots under one plan, where each bot could represent a trader-following relationship or a specific copy behavior.

That changed the product model.

A bot is an action.

A plan is a structure.

A plan could include multiple traders, use different ratios, represent a strategy, be paused, changed, tested, improved, or compared over time. It gave the system a way to move beyond “follow this trader” and toward “organize this idea.”

That was when the name **LuckyPlans** started to feel right.

The “lucky” part kept the original spirit. The “plans” part made the product more serious.

Thankfully, I did not name it something like `CopyThisOneWalletAndPray`.

Some early decisions age better than others.

## Four Hours at Night

The first MVP took around five months to build.

This was not full-time founder mode. I still had my professional work during the day, and I treated that responsibility seriously. LuckyPlans had to fit outside that schedule.

Most of the work happened at night, usually around four hours a day.

During the day, I worked on company responsibilities. At night, I worked on backend services, database models, indexers, bot logic, plan structure, deployment, and testnet execution.

That rhythm was not glamorous. Some nights produced real progress. Some nights produced only a better understanding of why the system was broken. Some nights the main achievement was discovering that one bug had three parents, and unfortunately all of them lived in my codebase.

But the rhythm worked.

Four hours does not sound dramatic in one day. Over five months, it becomes serious. That is the quiet math of building: focused time, repeated consistently, eventually becomes infrastructure.

I did not have a team, unlimited time, or perfect conditions.

I had a direction, a schedule, and enough stubbornness to keep returning after work.

That was enough to reach the first MVP.

## The Server Finally Had a Heartbeat

One of the most satisfying moments was seeing LuckyPlans run on the VPS.

The server was small, but the system finally had a heartbeat.

The backend listened for events. The indexer collected activity. The copy logic processed actions. Bots reacted to trader behavior. Plans organized those bots. The executor opened copied positions on testnet.

To someone else, the logs probably looked boring.

To me, they looked like movement.

A new event appeared, the system noticed, the backend processed it, a bot reacted, the plan structure made sense, and the execution flow completed. For the first time, I was not manually holding every piece together.

It was still rough. It needed better monitoring, safer state handling, stronger recovery logic, and more production hardening. But it was running.

And when a side project starts running on its own server, even a modest one, it stops feeling like a hobby and starts feeling like a responsibility.

A small server can be very good at making your idea feel real.

Also very good at reminding you that uptime is now your problem.

## Testnet Was Not a Limitation

LuckyPlans was still using testnet and mock assets, which was exactly where it belonged.

Technically, the system could later move toward real trading once real USDC was funded to the connected Arbitrum address. But I did not want to treat that as a small configuration change.

In normal SaaS, a backend bug might break a page.

In copy trading, a backend bug can open the wrong position, wrong size, wrong direction, wrong leverage, or wrong timing.

That is not just a bug report.

That is a financial event.

So testnet was not a weakness. It was the right checkpoint. It allowed me to validate the core behavior without pretending the system had already earned the right to touch real capital.

Before real money, LuckyPlans needed stronger monitoring, safer execution, better risk controls, reliable recovery, and more evidence.

The MVP was not the finish line.

It was the first serious proof that the foundation existed.

## What the First MVP Proved

By March 2025, LuckyPlans had the basic foundation of a real product: backend architecture, database models, on-chain event indexing, leaderboard infrastructure, bot management, plan management, testnet execution, and deployment.

More importantly, it had a shape.

The question was no longer only whether copy trading could technically work. The larger question became whether LuckyPlans could become a structured product around trader discovery, bot organization, plan creation, simulation, and eventually safer copy trading execution.

The first MVP did not prove the business.

It did not prove profitability.

It did not prove readiness for real capital.

But it proved that the system could exist.

For a project built at night, after work, without a team, that mattered.

## The Lesson

This stage taught me that building a product is not only about speed. It is about rhythm, responsibility, and staying consistent long enough for the pieces to connect.

Progress rarely looks dramatic while it is happening.

Sometimes it is one database model after work, one indexer bug fixed late at night, one failed transaction finally understood after midnight, or one deployment improvement before sleeping.

Then, after enough nights, the project becomes real.

That was what March 2025 represented.

LuckyPlans was not finished. It was not public. It was not safe for real capital.

But it was alive, deployed, and working.

After five months, four hours a night, and a lot of stubborn consistency, LuckyPlans had its first real MVP.

Not perfect.

But real enough that the next stage became unavoidable.
