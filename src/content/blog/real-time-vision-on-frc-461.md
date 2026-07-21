---
title: "Real-Time Vision on FRC 461"
description: "Notes on getting neural-network vision tracking to run fast enough to matter on a competition robot."
date: 2026-07-12
tags: ["Computer Vision", "Robotics", "Java"]
---

On FRC 461 (*Rowdy*), one of the hardest problems wasn't accuracy — it was
latency. A vision pipeline that identifies a target perfectly but reports it
200 ms late is useless when the robot is moving.

## The constraint

The control loop wanted a fresh target estimate every cycle. That budget had to
cover capture, inference, and the coordinate-frame math to turn a pixel into a
field-relative pose — all on hardware that also had to run the rest of the
robot.

## What actually helped

- **Downscale aggressively before inference.** Most of the signal survived a
  much smaller input, and the speedup was worth far more than the marginal
  accuracy.
- **Move math off the hot path.** Kinematics and pose transforms are cheap and
  deterministic; keeping them out of the inference stage made the whole loop
  easier to reason about.
- **Measure end-to-end, not per-stage.** The stage that *looked* slow in
  isolation often wasn't the one adding real latency once queuing was included.

The lesson that stuck with me: for real-time systems, the right question is
rarely "is this correct?" but "is this correct *in time*?"
