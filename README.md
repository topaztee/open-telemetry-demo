<!-- markdownlint-disable-next-line -->

# <img src="https://opentelemetry.io/img/logos/opentelemetry-logo-nav.png" alt="OTel logo" width="45"> OpenTelemetry Demo

[![Slack](https://img.shields.io/badge/slack-@cncf/otel/demo-brightgreen.svg?logo=slack)](https://cloud-native.slack.com/archives/C03B4CWV4DA)
[![Version](https://img.shields.io/github/v/release/open-telemetry/opentelemetry-demo?color=blueviolet)](https://github.com/open-telemetry/opentelemetry-demo/releases)
[![Commits](https://img.shields.io/github/commits-since/open-telemetry/opentelemetry-demo/latest?color=ff69b4&include_prereleases)](https://github.com/open-telemetry/opentelemetry-demo/graphs/commit-activity)
[![Downloads](https://img.shields.io/docker/pulls/otel/demo)](https://hub.docker.com/r/otel/demo)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg?color=red)](https://github.com/open-telemetry/opentelemetry-demo/blob/main/LICENSE)
[![Integration Tests](https://github.com/open-telemetry/opentelemetry-demo/actions/workflows/run-integration-tests.yml/badge.svg)](https://github.com/open-telemetry/opentelemetry-demo/actions/workflows/run-integration-tests.yml)

## Welcome to the OpenTelemetry Astronomy Shop Demo

This repository contains the OpenTelemetry Astronomy Shop, a microservice-based
distributed system intended to illustrate the implementation of OpenTelemetry in
a near real-world environment.

Our goals are threefold:

- Provide a realistic example of a distributed system that can be used to
  demonstrate OpenTelemetry instrumentation and observability.
- Build a base for vendors, tooling authors, and others to extend and
  demonstrate their OpenTelemetry integrations.
- Create a living example for OpenTelemetry contributors to use for testing new
  versions of the API, SDK, and other components or enhancements.

We've already made [huge
progress](https://github.com/open-telemetry/opentelemetry-demo/blob/main/CHANGELOG.md),
and development is ongoing. We hope to represent the full feature set of
OpenTelemetry across its languages in the future.

If you'd like to help (**which we would love**), check out our [contributing
guidance](./CONTRIBUTING.md).

If you'd like to extend this demo or maintain a fork of it, read our
[fork guidance](https://opentelemetry.io/docs/demo/forking/).

## Quick start

You can be up and running with the demo in a few minutes. Check out the docs for
your preferred deployment method:

- [Docker](https://opentelemetry.io/docs/demo/docker_deployment/)
- [Kubernetes](https://opentelemetry.io/docs/demo/kubernetes_deployment/)

## Documentation

For detailed documentation, see [Demo Documentation][docs]. If you're curious
about a specific feature, the [docs landing page][docs] can point you in the
right direction.

## Demos featuring the Astronomy Shop

We welcome any vendor to fork the project to demonstrate their services and
adding a link below. The community is committed to maintaining the project and
keeping it up to date for you.

|                                         |                             |                                                                |
| --------------------------------------- | --------------------------- | -------------------------------------------------------------- |
| [AlibabaCloud LogService][AlibabaCloud] | [Elastic][Elastic]          | [New Relic][NewRelic]                                          |
| [AppDynamics][AppDynamics]              | [Google Cloud][GoogleCloud] | [OpenSearch][OpenSearch]                                       |
| [Aspecto][Aspecto]                      | [Grafana Labs][GrafanaLabs] | [Sentry][Sentry]                                               |
| [Axiom][Axiom]                          | [Guance][Guance]            | [ServiceNow Cloud Observability][ServiceNowCloudObservability] |
| [Axoflow][Axoflow]                      | [Helios][Helios]            | [Splunk][Splunk]                                               |
| [Azure Data Explorer][Azure]            | [Honeycomb.io][Honeycombio] | [Sumo Logic][SumoLogic]                                        |
| [Coralogix][Coralogix]                  | [Instana][Instana]          | [TelemetryHub][TelemetryHub]                                   |
| [Dash0][Dash0]                          | [Kloudfuse][Kloudfuse]      | [Teletrace][Teletrace]                                         |
| [Datadog][Datadog]                      | [Liatrio][Liatrio]          | [Tracetest][Tracetest]                                         |
| [Dynatrace][Dynatrace]                  | [Logz.io][Logzio]           | [Uptrace][Uptrace]                                             |

## Contributing

To get involved with the project see our [CONTRIBUTING](CONTRIBUTING.md)
documentation. Our [SIG Calls](CONTRIBUTING.md#join-a-sig-call) are every other
Monday at 8:30 AM PST and anyone is welcome.

## Project leadership

[Maintainers](https://github.com/open-telemetry/community/blob/main/community-membership.md#maintainer)
([@open-telemetry/demo-maintainers](https://github.com/orgs/open-telemetry/teams/demo-maintainers)):

- [Austin Parker](https://github.com/austinlparker), Honeycomb
- [Juliano Costa](https://github.com/julianocosta89), Datadog
- [Mikko Viitanen](https://github.com/mviitane), Dynatrace
- [Pierre Tessier](https://github.com/puckpuck), Honeycomb

[Approvers](https://github.com/open-telemetry/community/blob/main/community-membership.md#approver)
([@open-telemetry/demo-approvers](https://github.com/orgs/open-telemetry/teams/demo-approvers)):

- [Cedric Ziel](https://github.com/cedricziel) Grafana Labs
- [Penghan Wang](https://github.com/wph95), AppDynamics
- [Reiley Yang](https://github.com/reyang), Microsoft
- [Ziqi Zhao](https://github.com/fatsheep9146), Alibaba

Emeritus:

- [Carter Socha](https://github.com/cartersocha)
- [Michael Maxwell](https://github.com/mic-max)
- [Morgan McLean](https://github.com/mtwo)

### Thanks to all the people who have contributed

[![contributors](https://contributors-img.web.app/image?repo=open-telemetry/opentelemetry-demo)](https://github.com/open-telemetry/opentelemetry-demo/graphs/contributors)

[docs]: https://opentelemetry.io/docs/demo/

<!-- Links for Demos featuring the Astronomy Shop section -->

[AlibabaCloud]: https://github.com/aliyun-sls/opentelemetry-demo
[AppDynamics]: https://www.appdynamics.com/blog/cloud/how-to-observe-opentelemetry-demo-app-in-appdynamics-cloud/
[Aspecto]: https://github.com/aspecto-io/opentelemetry-demo
[Axiom]: https://play.axiom.co/axiom-play-qf1k/dashboards/otel.traces.otel-demo-traces
[Axoflow]: https://axoflow.com/opentelemetry-support-in-more-detail-in-axosyslog-and-syslog-ng/
[Azure]: https://github.com/Azure/Azure-kusto-opentelemetry-demo
[Coralogix]: https://coralogix.com/blog/configure-otel-demo-send-telemetry-data-coralogix
[Dash0]: https://github.com/dash0hq/opentelemetry-demo
[Datadog]: https://docs.datadoghq.com/opentelemetry/guide/otel_demo_to_datadog
[Dynatrace]: https://www.dynatrace.com/news/blog/opentelemetry-demo-application-with-dynatrace/
[Elastic]: https://github.com/elastic/opentelemetry-demo
[GoogleCloud]: https://github.com/GoogleCloudPlatform/opentelemetry-demo
[GrafanaLabs]: https://github.com/grafana/opentelemetry-demo
[Guance]: https://github.com/GuanceCloud/opentelemetry-demo
[Helios]: https://otelsandbox.gethelios.dev
[Honeycombio]: https://github.com/honeycombio/opentelemetry-demo
[Instana]: https://github.com/instana/opentelemetry-demo
[Kloudfuse]: https://github.com/kloudfuse/opentelemetry-demo
[Liatrio]: https://github.com/liatrio/opentelemetry-demo
[Logzio]: https://logz.io/learn/how-to-run-opentelemetry-demo-with-logz-io/
[NewRelic]: https://github.com/newrelic/opentelemetry-demo
[OpenSearch]: https://github.com/opensearch-project/opentelemetry-demo
[Sentry]: https://github.com/getsentry/opentelemetry-demo
[ServiceNowCloudObservability]: https://docs.lightstep.com/otel/quick-start-operator#send-data-from-the-opentelemetry-demo
[Splunk]: https://github.com/signalfx/opentelemetry-demo
[SumoLogic]: https://www.sumologic.com/blog/common-opentelemetry-demo-application/
[TelemetryHub]: https://github.com/TelemetryHub/opentelemetry-demo/tree/telemetryhub-backend
[Teletrace]: https://github.com/teletrace/opentelemetry-demo
[Tracetest]: https://github.com/kubeshop/opentelemetry-demo
[Uptrace]: https://github.com/uptrace/uptrace/tree/master/example/opentelemetry-demo

## Custom fork instructions (Merlinn)

This is a fork of the original opentelemetry-demo. It contains the following modifications:

- Contains otel-col changes for exporting logs to loki and/or Coralogix.
- Uses alertmanager to fire alerts based on Prometheus. Alert manager is configured
- Contains some UI changes

### Usage (TL;DR)

1. Clone this fork
2. Run `make start`.

That's it. Now all the microservices should be up. It's an e-commerce app so you can navigate to http://localhost:8080/
and play with the UI.

### Export logs to Coralogix

In order to export logs to Coralogix, you need to change the root .env file.

Go to the root .env and modify the following vars:

- `CORALOGIX_DOMAIN`. For example: eu2.coralogix.com
- `CORALOGIX_PRIVATE_KEY`. This should be your "Send Your Data" key. Go to Data Flow -> API Keys -> Send Your Data to generate a new key.

> `CORALOGIX_APP_NAME` and `CORALOGIX_SUBSYS_NAME` can stay the same.

For more information, see this official blog post:
https://coralogix.com/blog/configure-otel-demo-send-telemetry-data-coralogix/

### Configure Grafana <-> Opsgenie

If you want to send your Grafana alerts to Opsgenie to trigger incidents, you need to change the `opsgenie.yaml` file.

Go to `opsgenie.yaml` and change `apiKey` field. This should be a Opsgenie API key.

To generate an API key, go to your Opsgenie dashboard. Click Settings and go to Integrations. In the integrations screen, click "Add integration". Search for "API" and select it. Afterwards, click "Enable integration". That's it. Now you should see your newly created API key.

For more information, checout our docs: https://docs.merlinn.co/Integrations/Opsgenie

### Configure Alert Manager <-> Slack messages

In order to connect alertmanager to Slack, you can generate a [webhook url](https://api.slack.com/messaging/webhooks) and insert it into alertmanager-config.yaml.
# open-telemetry-demo