import { Head, Link } from "@inertiajs/vue3";
import { I as Icon, L as Layout } from "./Layout-NXEuzIE5.js";
import throttle from "lodash/throttle.js";
import pickBy from "lodash/pickBy.js";
import { T as TaskDetails } from "./TaskDetails-Brzqi4RZ.js";
import { B as BoardViewMenu } from "./BoardViewMenu-VLZvjjCz.js";
import { D as DatePicker } from "./DatePicker-Dszogp-H.js";
import draggable from "vuedraggable";
import moment from "moment";
import mapValues from "lodash/mapValues.js";
import { B as BoardFilter } from "./BoardFilter-CiNC3Uok.js";
import { R as RightMenu } from "./RightMenu-pQERURyc.js";
import axios from "axios";
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./FlashMessages-DizfipYZ.js";
import "@popperjs/core";
import "uuid";
import "moment-duration-format";
import "laravel-vue-i18n";
import "./DeleteConfirmation-BPXvi2r7.js";
const _sfc_main = {
  metaInfo: { title: "Dashboard" },
  components: { RightMenu, BoardFilter, Head, Icon, Link, draggable, TaskDetails, DatePicker, BoardViewMenu },
  layout: Layout,
  props: {
    auth: Object,
    title: String,
    tasks: Object,
    filters: Object,
    project: Object,
    list_index: Object,
    board_lists: Object,
    lists: {
      required: false
    }
  },
  remember: "form",
  data() {
    return {
      errors: [],
      loading: false,
      td_pop: false,
      show_right_menu: false,
      open_filter: false,
      showLabelBox: false,
      label_search: "",
      user_search: "",
      list_search: "",
      selected: { task_id: null, task_index: null, list_index: null, top: 0, left: 0 },
      showAssigneeBox: false,
      showListBox: false,
      firstResponse: [],
      lastResponse: [],
      new_task: {},
      taskDetailsOpen: false,
      activeTimerString: "",
      months: [],
      counter: { seconds: 0, timer: this.timer },
      drag: false,
      new_task_open: false,
      taskDetailsId: "",
      labels: null,
      list_items: null,
      team_members: null,
      form: {
        user: this.filters.user,
        due: this.filters.due,
        label: this.filters.label,
        task: this.filters.task ?? null
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get(this.route("projects.view.table", this.project.slug || this.project.id), pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  computed: {
    isModalVisible() {
      return this.taskDetailsOpen;
    }
  },
  created() {
    this.moment = moment;
    let currentUrl = this.$page.url.substr(1);
    currentUrl.split("/");
    this.checkTaskUri();
    this.getOtherData();
  },
  methods: {
    taskDetailsPopup(id) {
      this.form.task = id;
      this.td_pop = true;
      this.taskDetailsId = id;
      this.taskDetailsOpen = true;
    },
    closeDetails() {
      this.form.task = null;
      this.taskDetailsOpen = false;
    },
    reset() {
      this.form = mapValues(this.form, () => null);
    },
    doFilter(form) {
      Object.assign(this.form, form);
    },
    addLabelToTask(checked, id) {
      axios.post(this.route("task.labels.add"), { task_id: this.selected.task_id, label_id: id }).then((response) => {
        if (response.data) {
          if (checked) {
            this.lists[this.selected.list_index].tasks[this.selected.task_index].task_labels.push(response.data);
          } else {
            const findIndex = this.lists[this.selected.list_index].tasks[this.selected.task_index].task_labels.findIndex((tl) => tl.label_id === id);
            if (findIndex > -1) {
              this.lists[this.selected.list_index].tasks[this.selected.task_index].task_labels.splice(findIndex, 1);
            }
          }
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    assignUserToTask(checked, id) {
      axios.post(this.route("task.assignees.add"), { task_id: this.selected.task_id, user_id: id }).then((response) => {
        if (response.data) {
          const task_assignees = this.lists[this.selected.list_index].tasks[this.selected.task_index].assignees;
          if (checked) {
            task_assignees.push(response.data);
          } else {
            const findIndex = task_assignees.findIndex((a) => a.user_id === id);
            if (findIndex > -1) {
              task_assignees.splice(findIndex, 1);
            }
          }
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    task_label_ids() {
      return this.lists[this.selected.list_index].tasks[this.selected.task_index].task_labels.map((item) => item.label_id);
    },
    task_assignees() {
      return this.lists[this.selected.list_index].tasks[this.selected.task_index].assignees.map((item) => item.user_id);
    },
    isCurrentLabel(id) {
      return this.lists[this.selected.list_index].tasks[this.selected.task_index].list_id === id;
    },
    addAction(e, task_id, task_index, list_index, visible) {
      this.getCurrentPosition(e);
      this.selected.task_id = task_id;
      this.selected.task_index = task_index;
      this.selected.list_index = list_index;
      this[visible] = true;
    },
    getCurrentPosition(e) {
      this.selected.left = e.clientX - 200 + "px";
      this.selected.top = (e.clientY > 450 ? 410 : e.clientY - 30) + "px";
    },
    searchLabel(input) {
      return this.labels.filter((lab) => lab.name.toLowerCase().indexOf(input) > -1);
    },
    searchUser(input) {
      return this.team_members.filter((tm) => tm.user.name.toLowerCase().indexOf(input) > -1);
    },
    searchList(input) {
      return this.list_items.filter((list) => list.title.toLowerCase().indexOf(input) > -1);
    },
    makeArchive(e, id, tasks, index) {
      e.preventDefault();
      this.saveTask(id, { is_archive: 1 });
      tasks.splice(index, 1);
    },
    visibleShowMore(e, element) {
      e.preventDefault();
      element.show_more = !!element.show_more ? false : true;
    },
    saveListTitle(e, board_id) {
      if (e.keyCode === 13 || e.type === "blur") {
        e.preventDefault();
        e.target.blur();
        if (e.target.innerText) {
          const title = e.target.innerText;
          this.changeBoardTitle(board_id, title);
        }
      }
    },
    changeBoardTitle(id, title) {
      axios.post(this.route("board.update", id), { title }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    },
    afterDrop(e) {
      const new_list = this.newSortedItems(e, "to");
      let previous_list = [];
      if (!!e.pullMode) {
        previous_list = this.newSortedItems(e, "from");
        this.saveTask(e.item.dataset.id, { list_id: e.to.dataset.id });
      }
      const list_items = new_list.concat(previous_list);
      this.saveOrder(list_items);
    },
    newSortedItems(e, selector) {
      const lists = e[selector].getElementsByTagName("tr");
      const newOrder = [];
      for (let i = 0; i < lists.length; i++) {
        newOrder.push({ id: lists[i].dataset.id, order: i + 1 });
      }
      return newOrder;
    },
    updateTaskEntry(taskId, newData) {
      for (const list of this.lists) {
        const task = list.tasks.find((t) => t.id === taskId);
        if (task) {
          Object.assign(task, newData);
          return task;
        }
      }
      return null;
    },
    saveTask(id, taskObject) {
      axios.post(this.route("task.update", id), taskObject).then((response) => {
        this.updateTaskEntry(id, taskObject);
      }).catch((error) => {
        console.log(error);
      });
    },
    saveOrder(taskObject) {
      axios.post(this.route("task.update.order"), taskObject).catch((error) => {
        console.log(error);
      });
    },
    submitNewTask(listItem, listIndex) {
      if (this.new_task.title) {
        let task = { title: this.new_task.title, project_id: this.project.id, list_id: listItem.id, order: listItem.tasks.length + 1 };
        this.saveNewTask(task, listIndex);
        this.new_task.title = "";
      }
      listItem.new_task_open = false;
    },
    saveNewTask(taskObject, listIndex) {
      const tasks = this.lists[listIndex].tasks;
      axios.post(this.route("task.new"), taskObject).then((response) => {
        if (response && response.data) {
          tasks.push(response.data);
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    taskDetails(id) {
      if (id) {
        window.location.href = this.route("projects.table.with.task", { projectUid: this.project.id, taskUid: id });
      }
    },
    goToLink(link) {
      window.location.href = link;
    },
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    },
    async getOtherData() {
      const dataResponse = await axios.get(this.route("project.other.data", { project_id: this.project.id }));
      const res = dataResponse.data;
      this.labels = res.labels || [];
      this.list_items = res.lists || [];
      this.team_members = res.team_members || [];
    },
    checkTaskUri() {
      const url = this.$page.url;
      let splitUrl = url.split("/");
      splitUrl = splitUrl.filter((el) => !!el);
      if (splitUrl[splitUrl.length - 2] === "task") {
        this.taskDetailsId = splitUrl[splitUrl.length - 1];
        this.taskDetailsOpen = true;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_board_view_menu = resolveComponent("board-view-menu");
  const _component_board_filter = resolveComponent("board-filter");
  const _component_draggable = resolveComponent("draggable");
  const _component_icon = resolveComponent("icon");
  const _component_DatePicker = resolveComponent("DatePicker");
  const _component_task_details = resolveComponent("task-details");
  const _component_right_menu = resolveComponent("right-menu");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["h-full", { "right_menu_enable": $data.show_right_menu }]
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t($props.title)
  }, null, _parent));
  _push(`<div class="flex flex-col flex-grow-1 flex-shrink-1 h-full">`);
  _push(ssrRenderComponent(_component_board_view_menu, {
    project: $props.project,
    onFilterToggle: ($event) => $data.open_filter = !$data.open_filter,
    onMenuToggle: ($event) => $data.show_right_menu = !$data.show_right_menu,
    onFClear: ($event) => $options.reset(),
    filters: $props.filters,
    view: "table"
  }, null, _parent));
  if ($data.open_filter) {
    _push(ssrRenderComponent(_component_board_filter, {
      project: $props.project,
      onBoardFilter: ($event) => $data.open_filter = false,
      filters: $props.filters,
      onDoFilter: $options.doFilter,
      options: "user,due,label"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex flex-col task__table overflow-y-auto h-full"><div class="inline-block min-w-full h-full py-4 align-middle md:px-3 lg:px-4"><div class="table__view"><table><thead><tr><th scope="col" class="w-[20px]"></th><th scope="col" class="w-[calc(32%-70px)]]"><button class="flex items-center gap-x-3 focus:outline-none"><span>${ssrInterpolate(_ctx.$t("Task"))}</span></button></th><th scope="col" class="w-[17%]">${ssrInterpolate(_ctx.$t("List"))}</th><th scope="col" class="w-[17%]">${ssrInterpolate(_ctx.$t("Labels"))}</th><th scope="col" class="w-[17%]">${ssrInterpolate(_ctx.$t("Users"))}</th><th scope="col" class="w-[17%]">${ssrInterpolate(_ctx.$t("Due Date"))}</th><th scope="col" class="relative w-[50px]"><span class="sr-only">${ssrInterpolate(_ctx.$t("Edit"))}</span></th></tr></thead><!--[-->`);
  ssrRenderList($props.lists, (listItem, listIndex) => {
    _push(ssrRenderComponent(_component_draggable, {
      key: listItem.id,
      "data-index": listIndex,
      "data-id": listItem.id,
      tag: "tbody",
      handle: ".handle",
      class: "t__drag",
      list: listItem.tasks,
      group: "task",
      "item-key": "id",
      onEnd: ($event) => $options.afterDrop($event)
    }, {
      item: withCtx(({ element, index }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<tr class="list-group-item group"${ssrRenderAttr("data-id", element.id)}${_scopeId}><td class="pl-2 pr-0 opacity-0 group-hover:opacity-100 py-2 border-none text-sm font-medium whitespace-nowrap w-[20px]"${_scopeId}><div class="cursor-grab handle"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_icon, {
            class: "w-6 h-6",
            name: "drag"
          }, null, _parent2, _scopeId));
          _push2(`</div></td><td class="px-2 py-2 text-sm font-medium whitespace-nowrap w-[calc(32%-70px)] hover:bg-gray-100"${_scopeId}><div class="cursor-pointer"${ssrRenderAttr("data-id", element.id)}${_scopeId}>`);
          if (element.timer) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "blink",
              class: "w-2 h-2"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="t__title__area"${_scopeId}><div class="checklist-box"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(!!element.is_done) ? " checked" : ""}${_scopeId}>`);
          _push2(ssrRenderComponent(_component_icon, { name: "checklist_box" }, null, _parent2, _scopeId));
          _push2(`</div><h4 class="font-medium t__title text-pretty"${_scopeId}>${ssrInterpolate(element.title)}</h4></div></div></td><td class="px-2 hide_arrow py-2 text-sm font-medium whitespace-nowrap w-[17%] cursor-pointer hover:bg-gray-100"${_scopeId}><div class="inline t__title text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800"${_scopeId}>${ssrInterpolate(element.list.title)} <div class="absolute show_arrow_hover top-0 right-0 h-full flex justify-center w-9 items-center"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_icon, {
            class: "w-4 h-4",
            name: "arrow-down"
          }, null, _parent2, _scopeId));
          _push2(`</div></div></td><td class="px-1 py-1 hide_arrow t_label text-sm whitespace-nowrap w-[17%] cursor-pointer hover:bg-gray-100"${_scopeId}>`);
          if (element.task_labels.length) {
            _push2(`<div class="task__labels overflow-hidden"${_scopeId}><!--[-->`);
            ssrRenderList(element.task_labels, (la, l_index) => {
              _push2(`<button class="color" style="${ssrRenderStyle({ backgroundColor: la.label.color })}"${_scopeId}>${ssrInterpolate(la.label.name)}</button>`);
            });
            _push2(`<!--]--><div class="absolute show_arrow_hover top-0 right-0 h-full flex justify-center w-9 items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              class: "w-4 h-4",
              name: "arrow-down"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            _push2(`<div${_scopeId}><div class="absolute show_arrow_hover top-0 left-0 h-full flex justify-center w-9 items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              class: "w-4 h-4",
              name: "plus"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          }
          _push2(`</td><td class="px-2 py-2 hide_arrow text-sm whitespace-nowrap w-[17%] cursor-pointer hover:bg-gray-100"${_scopeId}>`);
          if (element.assignees.length) {
            _push2(`<div class="flex items-center"${_scopeId}><!--[-->`);
            ssrRenderList(element.assignees, (assignee) => {
              _push2(`<div${ssrRenderAttr("aria-label", assignee.user.name)} class="block rounded-full h-6 w-6"${_scopeId}><img class="h-full w-full border border-white rounded-full"${ssrRenderAttr("src", assignee.user.photo_path)}${ssrRenderAttr("alt", assignee.user.name)}${_scopeId}></div>`);
            });
            _push2(`<!--]--><div class="absolute show_arrow_hover top-0 right-0 h-full flex justify-center w-9 items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              class: "w-4 h-4",
              name: "arrow-down"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            _push2(`<div${_scopeId}><div class="absolute show_arrow_hover top-0 left-0 h-full flex justify-center w-9 items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              class: "w-4 h-4",
              name: "plus"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          }
          _push2(`</td><td class="px-2 py-2 hide_arrow text-sm whitespace-nowrap w-[17%] cursor-pointer hover:bg-gray-100"${_scopeId}>`);
          if (element.due_date) {
            _push2(`<div class="t__title"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DatePicker, {
              modelValue: element.due_date,
              "onUpdate:modelValue": ($event) => element.due_date = $event,
              onChange: ($event) => $options.saveTask(element.id, { due_date: element.due_date })
            }, {
              trigger: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex t__title items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon, {
                    class: "w-4 w-4",
                    name: "time"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="ml-1 font-light leading-none" aria-label="Due date"${_scopeId2}>${ssrInterpolate(_ctx.moment(element.due_date).format("MMM D"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex t__title items-center" }, [
                      createVNode(_component_icon, {
                        class: "w-4 w-4",
                        name: "time"
                      }),
                      createVNode("span", {
                        class: "ml-1 font-light leading-none",
                        "aria-label": "Due date"
                      }, toDisplayString(_ctx.moment(element.due_date).format("MMM D")), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="absolute show_arrow_hover top-0 right-0 h-full flex justify-center w-9 items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              class: "w-4 h-4",
              name: "arrow-down"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            _push2(`<div class="w-full h-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DatePicker, {
              modelValue: element.due_date,
              "onUpdate:modelValue": ($event) => element.due_date = $event,
              onChange: ($event) => $options.saveTask(element.id, { due_date: element.due_date })
            }, {
              trigger: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="show_arrow_hover top-0 left-0 w-full h-full flex justify-start items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon, {
                    class: "w-4 h-4",
                    name: "plus"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "show_arrow_hover top-0 left-0 w-full h-full flex justify-start items-center" }, [
                      createVNode(_component_icon, {
                        class: "w-4 h-4",
                        name: "plus"
                      })
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          }
          _push2(`</td><td class="px-2 py-2 text-sm whitespace-nowrap w-[50px] relative"${_scopeId}><button aria-label="Archive" data-a="" class="flex w-full items-center text-xs font-medium focus:outline-none focus:ring-0"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_icon, {
            class: "mr-2 h-4 w-4",
            name: "archive"
          }, null, _parent2, _scopeId));
          _push2(`</button></td></tr>`);
        } else {
          return [
            createVNode("tr", {
              class: "list-group-item group",
              "data-id": element.id
            }, [
              createVNode("td", { class: "pl-2 pr-0 opacity-0 group-hover:opacity-100 py-2 border-none text-sm font-medium whitespace-nowrap w-[20px]" }, [
                createVNode("div", { class: "cursor-grab handle" }, [
                  createVNode(_component_icon, {
                    class: "w-6 h-6",
                    name: "drag"
                  })
                ])
              ]),
              createVNode("td", { class: "px-2 py-2 text-sm font-medium whitespace-nowrap w-[calc(32%-70px)] hover:bg-gray-100" }, [
                createVNode("div", {
                  class: "cursor-pointer",
                  "data-id": element.id
                }, [
                  element.timer ? (openBlock(), createBlock(_component_icon, {
                    key: 0,
                    name: "blink",
                    class: "w-2 h-2"
                  })) : createCommentVNode("", true),
                  createVNode("div", { class: "t__title__area" }, [
                    createVNode("div", { class: "checklist-box" }, [
                      createVNode("input", {
                        type: "checkbox",
                        checked: !!element.is_done,
                        onChange: ($event) => $options.saveTask(element.id, { is_done: $event.target.checked })
                      }, null, 40, ["checked", "onChange"]),
                      createVNode(_component_icon, { name: "checklist_box" })
                    ]),
                    createVNode("h4", {
                      class: "font-medium t__title text-pretty",
                      onClick: ($event) => $options.taskDetailsPopup(element.slug || element.id)
                    }, toDisplayString(element.title), 9, ["onClick"])
                  ])
                ], 8, ["data-id"])
              ]),
              createVNode("td", {
                class: "px-2 hide_arrow py-2 text-sm font-medium whitespace-nowrap w-[17%] cursor-pointer hover:bg-gray-100",
                onClick: ($event) => $options.addAction($event, element.id, index, listIndex, "showListBox")
              }, [
                createVNode("div", { class: "inline t__title text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800" }, [
                  createTextVNode(toDisplayString(element.list.title) + " ", 1),
                  createVNode("div", { class: "absolute show_arrow_hover top-0 right-0 h-full flex justify-center w-9 items-center" }, [
                    createVNode(_component_icon, {
                      class: "w-4 h-4",
                      name: "arrow-down"
                    })
                  ])
                ])
              ], 8, ["onClick"]),
              createVNode("td", {
                class: "px-1 py-1 hide_arrow t_label text-sm whitespace-nowrap w-[17%] cursor-pointer hover:bg-gray-100",
                onClick: ($event) => $options.addAction($event, element.id, index, listIndex, "showLabelBox")
              }, [
                element.task_labels.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "task__labels overflow-hidden"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(element.task_labels, (la, l_index) => {
                    return openBlock(), createBlock("button", {
                      class: "color",
                      style: { backgroundColor: la.label.color }
                    }, toDisplayString(la.label.name), 5);
                  }), 256)),
                  createVNode("div", { class: "absolute show_arrow_hover top-0 right-0 h-full flex justify-center w-9 items-center" }, [
                    createVNode(_component_icon, {
                      class: "w-4 h-4",
                      name: "arrow-down"
                    })
                  ])
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "absolute show_arrow_hover top-0 left-0 h-full flex justify-center w-9 items-center" }, [
                    createVNode(_component_icon, {
                      class: "w-4 h-4",
                      name: "plus"
                    })
                  ])
                ]))
              ], 8, ["onClick"]),
              createVNode("td", {
                class: "px-2 py-2 hide_arrow text-sm whitespace-nowrap w-[17%] cursor-pointer hover:bg-gray-100",
                onClick: ($event) => $options.addAction($event, element.id, index, listIndex, "showAssigneeBox")
              }, [
                element.assignees.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(element.assignees, (assignee) => {
                    return openBlock(), createBlock("div", {
                      "aria-label": assignee.user.name,
                      class: "block rounded-full h-6 w-6"
                    }, [
                      createVNode("img", {
                        class: "h-full w-full border border-white rounded-full",
                        src: assignee.user.photo_path,
                        alt: assignee.user.name
                      }, null, 8, ["src", "alt"])
                    ], 8, ["aria-label"]);
                  }), 256)),
                  createVNode("div", { class: "absolute show_arrow_hover top-0 right-0 h-full flex justify-center w-9 items-center" }, [
                    createVNode(_component_icon, {
                      class: "w-4 h-4",
                      name: "arrow-down"
                    })
                  ])
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "absolute show_arrow_hover top-0 left-0 h-full flex justify-center w-9 items-center" }, [
                    createVNode(_component_icon, {
                      class: "w-4 h-4",
                      name: "plus"
                    })
                  ])
                ]))
              ], 8, ["onClick"]),
              createVNode("td", { class: "px-2 py-2 hide_arrow text-sm whitespace-nowrap w-[17%] cursor-pointer hover:bg-gray-100" }, [
                element.due_date ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "t__title"
                }, [
                  createVNode(_component_DatePicker, {
                    modelValue: element.due_date,
                    "onUpdate:modelValue": ($event) => element.due_date = $event,
                    onChange: ($event) => $options.saveTask(element.id, { due_date: element.due_date })
                  }, {
                    trigger: withCtx(() => [
                      createVNode("div", { class: "flex t__title items-center" }, [
                        createVNode(_component_icon, {
                          class: "w-4 w-4",
                          name: "time"
                        }),
                        createVNode("span", {
                          class: "ml-1 font-light leading-none",
                          "aria-label": "Due date"
                        }, toDisplayString(_ctx.moment(element.due_date).format("MMM D")), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"]),
                  createVNode("div", { class: "absolute show_arrow_hover top-0 right-0 h-full flex justify-center w-9 items-center" }, [
                    createVNode(_component_icon, {
                      class: "w-4 h-4",
                      name: "arrow-down"
                    })
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "w-full h-full"
                }, [
                  createVNode(_component_DatePicker, {
                    modelValue: element.due_date,
                    "onUpdate:modelValue": ($event) => element.due_date = $event,
                    onChange: ($event) => $options.saveTask(element.id, { due_date: element.due_date })
                  }, {
                    trigger: withCtx(() => [
                      createVNode("div", { class: "show_arrow_hover top-0 left-0 w-full h-full flex justify-start items-center" }, [
                        createVNode(_component_icon, {
                          class: "w-4 h-4",
                          name: "plus"
                        })
                      ])
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                ]))
              ]),
              createVNode("td", { class: "px-2 py-2 text-sm whitespace-nowrap w-[50px] relative" }, [
                createVNode("button", {
                  "aria-label": "Archive",
                  "data-a": "",
                  onClick: ($event) => $options.makeArchive($event, element.id, listItem.tasks, index),
                  class: "flex w-full items-center text-xs font-medium focus:outline-none focus:ring-0"
                }, [
                  createVNode(_component_icon, {
                    class: "mr-2 h-4 w-4",
                    name: "archive"
                  })
                ], 8, ["onClick"])
              ])
            ], 8, ["data-id"])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]-->`);
  if (!$props.tasks.length) {
    _push(`<tbody><tr><td class="border-t px-6 py-4 text-center" colspan="7">${ssrInterpolate(_ctx.$t("To tasks found!"))}</td></tr></tbody>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table>`);
  if ($data.showListBox) {
    _push(`<div class="absolute flex w-[300px] z-10 text-sm flex-col bg-white px-4 py-4 rounded shadow" style="${ssrRenderStyle({ top: $data.selected.top, left: $data.selected.left })}"><h4 class="text-center mb-3 font-bold">Change List</h4><div class="absolute cursor-pointer hover:bg-gray-200 top-3 right-3 p-1.5 rounded">`);
    _push(ssrRenderComponent(_component_icon, {
      class: "w-4 h-4",
      name: "close"
    }, null, _parent));
    _push(`</div><input${ssrRenderAttr("value", $data.list_search)} class="border-[2px] px-2 py-1 border-gray-400 rounded-[3px]" placeholder="Search lists"><ul class="flex flex-col mt-3 gap-1 h-48 max-h-[200px] overflow-y-auto"><!--[-->`);
    ssrRenderList($options.searchList($data.list_search), (listObject, li_index) => {
      _push(`<li><label class="flex p-2 cursor-pointer hover:bg-gray-200 rounded"><input name="task_list" class="w-5 ml-1 mr-2" type="radio"${ssrIncludeBooleanAttr($options.isCurrentLabel(listObject.id)) ? " checked" : ""}><span data-a="" class="p-1" type="button"${ssrRenderAttr("tabindex", li_index)}>${ssrInterpolate(listObject.title)}</span></label></li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showAssigneeBox) {
    _push(`<div class="absolute flex w-[300px] z-10 text-sm flex-col bg-white px-4 py-4 rounded shadow" style="${ssrRenderStyle({ top: $data.selected.top, left: $data.selected.left })}"><h4 class="text-center mb-3 font-bold">Assignee</h4><div class="absolute cursor-pointer hover:bg-gray-200 top-3 right-3 p-1.5 rounded">`);
    _push(ssrRenderComponent(_component_icon, {
      class: "w-4 h-4",
      name: "close"
    }, null, _parent));
    _push(`</div><input id="p_t_s_u"${ssrRenderAttr("value", $data.user_search)} class="border-[2px] px-2 py-1 border-gray-400 rounded-[3px]" placeholder="Search users"><ul class="flex flex-col mt-3 gap-1 h-48 max-h-[200px] overflow-y-auto"><!--[-->`);
    ssrRenderList($options.searchUser($data.user_search), (userObject, user_index) => {
      _push(`<li><label${ssrRenderAttr("for", "t_u_id_" + user_index)} class="flex p-2 cursor-pointer hover:bg-gray-200 rounded"><input${ssrRenderAttr("id", "t_u_id_" + user_index)} class="w-5 ml-1 mr-2" type="checkbox"${ssrIncludeBooleanAttr($options.task_assignees().includes(userObject.user_id)) ? " checked" : ""}>`);
      if (userObject.user.photo_path) {
        _push(`<img${ssrRenderAttr("aria-label", userObject.user.name)}${ssrRenderAttr("alt", userObject.user.name)} class="w-6 h-6 rounded-full"${ssrRenderAttr("src", userObject.user.photo_path)}>`);
      } else {
        _push(`<img${ssrRenderAttr("aria-label", userObject.user.name)}${ssrRenderAttr("alt", userObject.user.name)} class="w-6 h-6 rounded-full" src="/images/user.svg">`);
      }
      _push(`<span data-a="" class="p-1" type="button"${ssrRenderAttr("tabindex", user_index)}>${ssrInterpolate(userObject.user.name)}</span></label></li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showLabelBox) {
    _push(`<div class="absolute flex w-[300px] z-10 text-sm flex-col bg-white px-4 py-4 rounded shadow" style="${ssrRenderStyle({ top: $data.selected.top, left: $data.selected.left })}"><h4 class="text-center mb-3 font-bold">Labels</h4><div class="absolute cursor-pointer hover:bg-gray-200 top-3 right-3 p-1.5 rounded">`);
    _push(ssrRenderComponent(_component_icon, {
      class: "w-4 h-4",
      name: "close"
    }, null, _parent));
    _push(`</div><input${ssrRenderAttr("value", $data.label_search)} class="border-[2px] px-2 py-1 border-gray-400 rounded-[3px]"${ssrRenderAttr("placeholder", _ctx.$t("Search labels"))}><ul class="flex flex-col mt-3 gap-3 max-h-[200px] overflow-y-auto"><!--[-->`);
    ssrRenderList($options.searchLabel($data.label_search), (lab, lab_index) => {
      _push(`<li><label class="flex gap-1"><input class="w-5 mr-2 cursor-pointer" type="checkbox"${ssrIncludeBooleanAttr($options.task_label_ids().includes(lab.id)) ? " checked" : ""}><span class="w-full px-3 py-2 rounded cursor-pointer hover:opacity-80" style="${ssrRenderStyle({ background: lab.color })}"${ssrRenderAttr("tabindex", lab_index)} data-color="orange">${ssrInterpolate(lab.name)}</span><button class="p-3 hover:bg-gray-200 rounded" type="button"${ssrRenderAttr("tabindex", lab_index)}>`);
      _push(ssrRenderComponent(_component_icon, {
        class: "w-3 h-3",
        name: "edit"
      }, null, _parent));
      _push(`</button></label></li>`);
    });
    _push(`<!--]--></ul><button class="w-full mt-4 px-3 py-2 rounded cursor-pointer bg-gray-300 hover:opacity-80"> Create a new label </button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div>`);
  if ($data.taskDetailsOpen) {
    _push(ssrRenderComponent(_component_task_details, {
      id: $data.taskDetailsId,
      view: "table",
      isPopup: $data.td_pop,
      onCloseModal: ($event) => $options.closeDetails()
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.show_right_menu) {
    _push(ssrRenderComponent(_component_right_menu, {
      project: $props.project,
      onMenuToggle: ($event) => $data.show_right_menu = !$data.show_right_menu,
      onOpenTask: (id) => $options.taskDetailsPopup(id)
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Projects/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Table = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Table as default
};
