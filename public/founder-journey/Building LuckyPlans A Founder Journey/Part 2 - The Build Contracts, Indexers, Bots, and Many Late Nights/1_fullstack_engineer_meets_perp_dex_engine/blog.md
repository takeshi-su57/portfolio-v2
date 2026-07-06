# Fullstack Engineer Meets the Perp DEX Engine

By the time LuckyPlans started becoming more than an idea, I had enough Web3 experience to be confident.

Maybe slightly too confident, which is usually when software begins preparing a lesson.

I had built Web3 applications before. I knew how to connect frontends to smart contracts, manage wallet flows, read contract state, write transactions, and work with tools like wagmi and viem. From the interface side, perp DEX products felt familiar enough: connect wallet, show positions, open trades, close trades, update the UI, avoid making the user feel like they are operating a nuclear reactor.

But LuckyPlans needed more than interface integration.

A trading UI hides a lot of violence behind polite buttons.

A user clicks **Open Long**, **Open Short**, or **Close Position**, and the frontend makes the action look simple. Behind that button, however, is collateral management, leverage, fees, liquidations, open interest, pair configuration, oracle pricing, callbacks, event logs, and a full position lifecycle.

A frontend engineer can connect the button.

LuckyPlans needed to understand what happened after the button.

That was the first real technical wall.

## The Button Was Not the System

My early assumption sounded reasonable:

If trading events are public, I can index them.
If I can index them, I can understand them.
If I can understand them, maybe I can copy them.

Clean logic.

Very dangerous.

Once I started reading the contracts, the idea became much less tidy. A leader’s trade was not just a single transaction I could politely observe and repeat. It was a sequence of contract calls, emitted events, calculated values, callbacks, state updates, and protocol-specific rules.

I needed to know where a position actually began, which event represented the real trading action, what data could be trusted directly from the chain, what had to be reconstructed, how fees were applied, and how the system moved from user intent to executed position.

That was when LuckyPlans stopped looking like a normal fullstack project.

It became a protocol interpretation problem.

The system had to translate on-chain behavior into something an indexer, backend, bot, and executor could all understand consistently. And in trading software, “mostly correct” is not a comforting target. It is usually the opening sentence of a postmortem.

## Etherscan Became My Second IDE

During this phase, Etherscan became one of my main workspaces.

I spent hours reading verified contracts, opening transactions, tracing event logs, comparing function calls, and trying to connect what happened on-chain with what users saw in the trading interface.

Some days felt less like engineering and more like forensic accounting with Solidity.

One contract pointed to another contract. That contract pointed to storage. Storage pointed to callbacks. Callbacks produced events. Events looked useful until I realized the important value was calculated somewhere else.

At some point, I remember thinking:

**“Okay, but where is the actual trade hiding?”**

That was frustrating, but it was also necessary.

Slowly, the map started forming. I learned which events mattered, how positions were opened and closed, what could be indexed safely, and what LuckyPlans would need to normalize by itself.

That changed my role in the project.

I was no longer just building a frontend around a protocol.

I was building a system that needed to watch the protocol, interpret it, and eventually react to it.

## One Month Without Anything Pretty

This research took around one month.

There was no launch, no polished UI, no user feedback, and no impressive demo to show anyone. Just contracts, transaction hashes, notes, logs, and a growing list of questions that had absolutely no respect for my sleep schedule.

Also, AI coding tools were not as strong as they are now. I could not simply throw the protocol into an agent and ask for a clean architecture, a risk model, and a motivational quote. I had to trace the logic myself, build the mental model myself, and decide which parts mattered for LuckyPlans.

That month taught me a simple lesson:

Before automation, understand the thing you are automating.

A copy trading system cannot only know that something happened. It has to know what happened well enough to respond safely. Otherwise, it is not automation. It is a very fast misunderstanding.

## The First Architecture

Once the protocol flow became clearer, I started shaping LuckyPlans into a real system.

For the frontend, I chose **Next.js** because I wanted the product to grow into a proper web application, not a script with a dashboard taped onto it.

I used **TanStack Query** because LuckyPlans would depend heavily on server state: traders, bots, plans, positions, leaderboards, simulations, and historical activity.

For the backend, I chose **NestJS** because I wanted structure early. The system would need modules, services, jobs, guards, resolvers, and clear domain boundaries. This was not going to stay small, and pretending otherwise would only make the future more expensive.

For the database, I chose **PostgreSQL with Prisma** because the data model would become relational quickly: traders, bots, plans, events, chains, contracts, actions, and simulations.

For the API layer, I chose **GraphQL** because dashboards and trading views rarely want one fixed response. Different screens need different shapes of data, and LuckyPlans was already moving toward a data-heavy product.

That was the moment the idea became architecture.

Not perfect architecture.

Not final architecture.

But something real enough to build on.

## The Lesson

This stage reminded me that being fullstack is useful, but it does not replace domain understanding.

I knew how to build applications. I knew how to connect smart contracts to interfaces. But LuckyPlans required something deeper: understanding the engine behind the interface.

That changed the project completely.

It was no longer just a Web3 app. It was a protocol data problem, an indexing problem, a backend architecture problem, and eventually a trading execution problem.

The first technical wall was not writing code.

It was learning what the code needed to respect.

Once I understood that, the project looked harder than I first expected.

But also much more worth building.
