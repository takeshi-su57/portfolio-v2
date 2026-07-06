# Fullstack Engineer Meets the Perp DEX Engine

Part 2 of LuckyPlans began with a slightly uncomfortable realization:

I was a fullstack engineer, but I was not yet a perp DEX engine engineer.

Before LuckyPlans, I had already built Web3 applications. I knew how to connect frontends to smart contracts, manage wallet flows, read contract state, write transactions, and work with tools like wagmi and viem. From the outside, that felt like enough experience to start.

Then I looked deeper.

A trading UI makes everything look simple. A user clicks **Open Long**, **Open Short**, or **Close Position**, and the interface politely hides the machinery behind the button.

But under that button is an entire engine: collateral, leverage, fees, liquidation logic, open interest, pair configuration, oracle prices, callbacks, execution flows, event logs, and position lifecycle management.

A frontend engineer can integrate the button.

LuckyPlans needed to understand what happened after the button.

That was the difference.

## The First Technical Wall

My early assumption was optimistic in the way most early assumptions are optimistic: simple enough to feel dangerous later.

If trading events were public, I could index them.
If I could index them, I could understand them.
If I could understand them, maybe I could copy them.

That sounded reasonable.

Then I started reading the contracts.

Very quickly, the clean idea became messy. I needed to understand where a position actually began, which event represented the real trading action, what data could be trusted directly from the chain, what had to be reconstructed, how fees were applied, how callbacks worked, and how the system moved from user intent to executed position.

The hardest part was not reading one function. The hardest part was understanding the full path.

A leader’s trade was not just a transaction. It was a sequence of contract calls, emitted events, calculated values, and state changes that my system had to interpret correctly.

That was when LuckyPlans stopped looking like a normal fullstack project.

It needed a bridge between protocol behavior, indexing, backend logic, and eventually execution. And that bridge could not be “mostly right,” because “mostly right” is not a beautiful phrase when money is involved.

## Etherscan Became the Office

During this phase, Etherscan became one of my main workspaces.

I spent hours reading verified contracts, opening transactions, following event logs, comparing function calls, and trying to connect what happened on-chain with what users saw in the trading interface.

Some days felt less like software development and more like forensic accounting with Solidity.

I would open one contract, then it would point to another contract, then a storage contract, then a callback, then an event, then a library, and eventually I would sit there thinking:

**“Okay, but where is the real trade?”**

That was frustrating, but it was also the work that made the system possible.

Slowly, the map started forming. I began to understand which events mattered, how positions were opened and closed, what data could be indexed, and what LuckyPlans would need to calculate or normalize by itself.

That changed how I thought about the product.

I was no longer only building a frontend around a trading protocol. I was starting to build a system that watched the protocol itself.

## One Month Without a Demo

This investigation took around one month.

There was no launch, no polished interface, no user feedback, and no satisfying “look what I built” moment. It was mostly contracts, transaction hashes, notes, logs, and a growing list of questions that did not care about my sleep schedule.

At that time, AI coding tools were also not what they are now. I could not simply hand the whole protocol to an agent and ask it to return a clean architecture with perfect explanations and no hallucinations. I had to trace the logic myself, build the mental model myself, and decide which parts of the system mattered for LuckyPlans.

That month taught me something important: before building automation, I needed understanding.

A copy trading system cannot only see that something happened. It has to understand what happened well enough to respond safely and consistently.

That distinction shaped the first architecture.

## Choosing the First Architecture

Once I had enough confidence in the protocol flow, I started turning the idea into a real system.

For the frontend, I chose **Next.js** because I wanted LuckyPlans to become a proper web product, not just a script with a dashboard attached.

I used **TanStack Query** because the product would depend heavily on server state: traders, bots, plans, positions, leaderboards, simulations, and historical activity.

For the backend, I chose **NestJS** because I wanted structure from the beginning. LuckyPlans was going to need modules, services, jobs, resolvers, guards, and clear domain separation. I had already learned enough to know this would not stay small.

For the database, I chose **PostgreSQL with Prisma** because the system would eventually have many relationships: traders, bots, plans, events, chains, contracts, actions, and simulations.

For the API layer, I chose **GraphQL** because dashboards and trading views often need flexible data access. The frontend would not always want one fixed REST response; it would need to ask for different shapes of data depending on the view.

That was the moment LuckyPlans moved from idea to architecture.

Not finished architecture.
Not perfect architecture.
But real enough to build on.

## The Lesson

This stage taught me that being fullstack is useful, but it does not replace domain understanding.

I knew how to build applications. I knew how to connect smart contracts to interfaces. But LuckyPlans forced me to understand the engine behind the interface.

That changed the whole project.

It was no longer just a Web3 app. It was a protocol data problem, an indexing problem, a backend architecture problem, and eventually a trading execution problem.

The first technical wall was not writing code.

It was learning what the code needed to respect.

Once I understood that, the journey looked harder than I first imagined.

But it also became much more interesting.

That was the point where LuckyPlans stopped being a simple copy trading idea and started becoming a real engineering problem I wanted to solve.
