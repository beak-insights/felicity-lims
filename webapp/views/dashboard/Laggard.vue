<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { onMounted, watch, ref } from "vue";
import { Chart } from "@antv/g2";
import { useDashBoardStore } from "@/stores/dashboard";

const dashBoardStore = useDashBoardStore();
const { dashboard } = storeToRefs(dashBoardStore);

const totalIncompleteDAI = ref(0);
const totalIncompleteAAD = ref(0);

onMounted(() => {
  dashBoardStore.getSampleLaggards();
});

watch(
  () => dashboard.value.laggards,
  (laggards, prev) => {
    const dai = laggards?.filter(
      (laggard) => laggard?.category === "delayed_and_incomplete"
    )[0];
    const aad = laggards?.filter(
      (laggard) => laggard?.category === "authorised_already_delayed"
    )[0];

    // Already Delayed
    totalIncompleteDAI.value = dai?.counts?.totalIncomplete ?? 0;
    const donutData = [
      {
        item: "On-Time",
        count: dai?.counts?.totalDelayed,
        percent:
          dai?.counts?.totalIncomplete > 0
            ? (dai?.counts?.totalDelayed / dai?.counts?.totalIncomplete) * 100
            : 0,
      },
      {
        item: "Delayed",
        count: dai?.counts?.totalNotDelayed,
        percent:
          dai?.counts?.totalIncomplete > 0
            ? (dai?.counts?.totalNotDelayed / dai?.counts?.totalIncomplete) * 100
            : 0,
      },
    ];
    plotLateDonut(donutData, "late-active-donut");

    const sinceData = [
      { type: "<10", value: dai?.counts?.lessThanTen },
      { type: "10 - 20", value: dai?.counts?.tenToTwenty },
      { type: "20 - 30", value: dai?.counts?.twentyToThirty },
      { type: "> 30", value: dai?.counts?.graterThanThirty },
    ];
    plotLateSince(
      sinceData,
      "late-active-since",
      "days since created",
      "number of samples"
    );

    // Authorised already delayed
    totalIncompleteAAD.value = aad?.counts?.totalIncomplete ?? 0;
    const donutData2 = [
      {
        item: "On-Time",
        count: aad?.counts?.totalDelayed,
        percent:
          aad?.counts?.totalIncomplete > 0
            ? (aad?.counts?.totalDelayed / aad?.counts?.totalIncomplete) * 100
            : 0,
      },
      {
        item: "Delayed",
        count: aad?.counts?.totalNotDelayed,
        percent:
          aad?.counts?.totalIncomplete > 0
            ? (aad?.counts?.totalNotDelayed / aad?.counts?.totalIncomplete) * 100
            : 0,
      },
    ];
    plotLateDonut(donutData2, "late-auth-donut");
    const sinceData2 = [
      { type: "<10", value: aad?.counts?.lessThanTen },
      { type: "10 - 20", value: aad?.counts?.tenToTwenty },
      { type: "20 - 30", value: aad?.counts?.twentyToThirty },
      { type: "> 30", value: aad?.counts?.graterThanThirty },
    ];
    plotLateSince(
      sinceData2,
      "late-auth-since",
      "days: created to authorised",
      "number of samples"
    );
  }
);

const plotLateSince = (data: any, elem: string, xAlias: string, yAlias: string) => {
  const chart = new Chart({
    container: elem,
    autoFit: true,
    height: 200,
    width: 600,
  });
  chart.data(data);
  chart.scale({
    value: {
      max: 150,
      min: 0,
      alias: yAlias,
    },
    type: {
      alias: xAlias,
    },
  });
  chart.axis("type", {
    title: {
      offset: 60,
      style: {
        fontSize: 12,
        fontWeight: 300,
      },
    },
    tickLine: null,
    line: null,
  });

  chart.axis("value", {
    label: null,
    title: {
      offset: 30,
      style: {
        fontSize: 12,
        fontWeight: 300,
      },
    },
  });

  chart.legend(false);
  chart.coordinate().transpose();
  chart
    .interval()
    .position("type*value")
    .size(26)
    .label("value", {
      style: {
        fill: "#8d8d8d",
      },
      offset: 10,
    });

  chart.interaction("element-active");
  chart.render();
};

const plotLateDonut = (data: any, elem: string) => {
  const chart = new Chart({
    container: elem,
    autoFit: true,
    height: 150,
    width: 300,
  });

  chart.data(data);
  chart.scale("percent", {
    formatter: (val: number) => `${(val * 100).toFixed(2)}%`,
  });

  chart.coordinate("theta", {
    radius: 0.75,
    innerRadius: 0.6,
  });

  chart.tooltip({
    showTitle: false,
    showMarkers: false,
    itemTpl:
      '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
  });

  chart.annotation();
  chart
    .interval()
    .adjust("stack")
    .position("percent")
    .color("item")
    .label("percent", {
      content: (data: any) => `${data.item}: ${(data.percent * 100).toFixed(2)}%`,
    })
    .tooltip("item*percent", (item: string, percent: number) => ({
      name: item,
      value: `${(percent * 100).toFixed(2)}%`,
    }));

  chart.interaction("element-active");
  chart.render();
};

const resetLateActive = () => {
  const lateActive = document.getElementById("late-active");
  if (lateActive) {
    lateActive.innerHTML = `
      <div class="mx-8">
        <div id="late-active-donut"></div>
      </div>
      <div>
        <div id="late-active-since"></div>
      </div>
    `;
  }
};

const resetLateAuth = () => {
  const lateAuth = document.getElementById("late-auth");
  if (lateAuth) {
    lateAuth.innerHTML = `
      <div class="mx-8">
        <div id="late-auth-donut"></div>
      </div>
      <div>
        <div id="late-auth-since"></div>
      </div>
    `;
  }
};
</script>

<template>
  <div class="mt-4">
    <div v-if="dashboard.fetchingLaggards" class="text-start my-4">
      <fel-loader message="Fetching laggard stats..." />
    </div>

    <section>
      <h1 class="text-xl text-foreground font-semibold">Delayed and incomplete</h1>
      <hr class="my-2" />
      <div class="flex justify-start items-center">
        <div class="bg-background shadow rounded-sm px-6 pt-3 pb-5 border border-foreground text-center">
          <div class="font-bold text-foreground text-2xl">{{ totalIncompleteDAI }}</div>
          <div class="font-semibold text-muted-foreground">Already Delayed</div>
        </div>
        <div id="late-active" class="flex justify-start items-center ms-8">
          <div class="me-8">
            <div id="late-active-donut"></div>
          </div>
          <div>
            <div id="late-active-since"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-8">
      <h1 class="text-xl text-foreground font-semibold">Authorised already delayed</h1>
      <hr class="my-2" />
      <div class="flex justify-start items-center">
        <div class="bg-background shadow rounded-sm px-6 pt-3 pb-5 border border-foreground text-center">
          <div class="font-bold text-foreground text-2xl">{{ totalIncompleteAAD }}</div>
          <div class="font-semibold text-muted-foreground">Authorised Already Delayed</div>
        </div>
        <div id="late-auth" class="flex justify-start items-center ms-8">
          <div class="me-8">
            <div id="late-auth-donut"></div>
          </div>
          <div>
            <div id="late-auth-since"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="postcss">
/* Component-specific styles can be added here */
</style>
