<template>
    <Head v-if="!loading" :title="$t(task.title + ' | ' + task.project.title)" />
    <div class="task__details">
        <div class="wrapper" id="modal">
            <div role="alert" class="container">
                <div v-if="loading" class="content">
                    <div role="status" class="td__loader">
                        <div class="__f"><div><div class="i__1" /><div class="i__2" /></div><div class="i__r" /></div>
                        <div class="__f"><div><div class="i__1" /><div class="i__2" /></div><div class="i__r" /></div>
                        <div class="__f"><div><div class="i__1" /><div class="i__2" /></div><div class="i__r" /></div>
                        <div class="__f"><div><div class="i__1" /><div class="i__2" /></div><div class="i__r" /></div>
                        <div class="__f"><div><div class="i__1" /><div class="i__2" /></div><div class="i__r" /></div>
                        <div class="__f"><div><div class="i__1" /><div class="i__2" /></div><div class="i__r" /></div>
                        <div class="__f"><div><div class="i__1" /><div class="i__2" /></div></div>
                        <div class="__f"><div><div class="i__1" /><div class="i__2" /></div></div>
                        <div class="__f"><div><div class="i__1" /><div class="i__2" /></div></div>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div v-else class="content w-full">
                    <div v-if="task.cover" ref="t__cover" class="t__cover" :style="{backgroundImage: 'url('+task.cover.path+')'}"></div>
                    <div v-if="task.is_archive" class="archive___task dark:bg-yellow-900/30 dark:text-yellow-200">
                        <icon name="archive" />
                        {{ $t('This task is archived.') }}
                    </div>
                    <div class="close_area">
                        <div class="wrap">
                                <span v-if="isPopup" @click="$emit('closeModal', true)" class="close__b">
                                    <icon class="h-6 w-6 dark:text-gray-300" name="close" />
                                </span>
                            <button v-else @click="goToLink(route(view === 'table'?'projects.view.table':'projects.view.board', task.project.slug || task.project.id))" class="close__b">
                                <icon class="h-6 w-6 dark:text-gray-300" name="close" />
                            </button>
                        </div>
                    </div>
                    <div class="mv__card bg-white dark:bg-gray-800 dark:border-gray-700" v-if="showMoveCard" :class="{'!left-auto right-6 top-23':is_move}">
                        <h4 class="text-center mb-3 font-bold dark:text-white">{{ $t('Move Card') }}</h4>
                        <div class="close__b absolute cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 top-3 right-3 p-1.5 rounded" @click="showMoveCard = false;is_move = false"><icon class=" w-4 h-4 dark:text-gray-300" name="close" /></div>
                        <span class="title mt-4 mb-1 font-bold dark:text-gray-200">{{ $t('Select a destination') }}</span>
                        <div class="td__btn relative flex flex-col rounded bg-gray-100 dark:bg-gray-700 mb-3 px-3 py-2.5">
                            <span class="mb-1 dark:text-gray-300">{{ $t('Project') }}</span>
                            <span class="text-[14px] font-bold dark:text-white">{{ getSelectedProject().title }}</span>
                            <select class="absolute left-0 top-0 opacity-0 w-full cursor-pointer h-[50px] z-2" v-model="move_object.project_id">
                                <option v-for="project in this.projects" :value="project.id">{{ project.title }}</option>
                            </select>
                        </div>
                        <div class="flex gap-2">
                            <div class="td__btn relative flex flex-col w-[70%] rounded bg-gray-100 dark:bg-gray-700 px-3 py-2.5">
                                <span class="mb-1 dark:text-gray-300">{{ $t('List') }}</span>
                                <span class="text-[14px] font-bold dark:text-white">{{ getSelectedList().title }}</span>
                                <select class="absolute left-0 top-0 opacity-0 w-full cursor-pointer h-[50px] z-2" v-model="move_object.list_id" @change="move_object.order=move_object.list_id === this.task.list_id?this.task.order: 1">
                                    <option v-for="list_item in getSelectedProjectLists()" :value="list_item.id">{{ list_item.title }}</option>
                                </select>
                            </div>
                            <div class="td__btn relative flex flex-col w-[30%] rounded bg-gray-100 dark:bg-gray-700 px-3 py-2.5">
                                <span class="mb-1 dark:text-gray-300">{{ $t('Position') }}</span>
                                <span class="text-[14px] font-bold dark:text-white">{{ move_object.order }}</span>
                                <select class="absolute left-0 top-0 opacity-0 w-full cursor-pointer h-[50px] z-2" v-model="move_object.order">
                                    <option v-for="list_item in [...Array(getSelectedListPostions()).keys()].map(x => ++x)" :value="list_item">{{ list_item }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex justify-between items-center action__buttons mt-3">
                            <button type="button" class="small save" @click="moveTask()">{{ $t('Move') }}</button>
                        </div>
                    </div>
                    <div class="m__body w-full">
                        <main class="main">
                            <div class="s__1">
                                <div class="checklist-box">
                                    <input type="checkbox" :checked="!!task.is_done" @change="saveTask({is_done: $event.target.checked})" />
                                    <icon name="checklist_box" />
                                </div>
                                <div class="t__l">
                                    <h2 class="__t" contenteditable="true" @keyup.enter="saveTitle($event)" @blur="saveTitle($event)">
                                        {{ task.title }}
                                    </h2>
                                    <span class="text-xs dark:text-gray-300">in list <span class="cursor-pointer underline dark:text-gray-200" @click="displayMoveCard()">{{ task.list.title }}</span> </span>

                                    <div class="flex flex-col mt-5">
                                        <span class="text-xs font-bold mb-1 dark:text-gray-300">{{ $t('Labels') }}</span>
                                        <div class="list_labels flex flex-wrap gap-1">
                                            <button @click="showLabelBox = true" class="label_button" v-for="(task_label, label_index) in task.task_labels" :style="{ background: task_label.label.color }" :aria-label="task_label.label.name" data-a="">{{ task_label.label.name }}</button>
                                            <button @click="showLabelBox = true" class="label_button bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"><icon class="dark:text-gray-300" name="plus" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute flex w-[300px] z-10 text-sm flex-col bg-white dark:bg-gray-800 px-4 py-4 rounded shadow dark:border dark:border-gray-700" v-if="showLabelBox">
                                <h4 class="text-center mb-3 font-bold dark:text-white">{{ $t('Labels') }}</h4>
                                <div class="absolute cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 top-3 right-3 p-1.5 rounded" @click="showLabelBox = false" >
                                    <icon class=" w-4 h-4 dark:text-gray-300" name="close" />
                                </div>
                                <input v-model="label_search" class="border-[2px] px-2 py-1 border-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-[3px] dark:placeholder-gray-400" :placeholder="$t('Search labels')" />
                                <ul class="flex flex-col mt-3 gap-3 max-h-[200px] overflow-y-auto">
                                    <li v-for="(lab, lab_index) in searchLabel(label_search)">
                                        <label class="flex gap-1">
                                            <input class="w-5 mr-2 cursor-pointer" type="checkbox" :checked="task_label_ids().includes(lab.id)" @change="addLabelToTask($event.target.checked, lab.id)">
                                            <span class="w-full px-3 py-2 rounded cursor-pointer hover:opacity-80" :style="{background: lab.color}" :tabindex="lab_index" :aria-label="lab.name" data-color="orange">{{ lab.name }}</span>
                                            <button class="p-3 hover:bg-gray-200 dark:hover:bg-gray-600 rounded" type="button" :tabindex="lab_index" @click="label = lab; showLabelBox = false; showEditLabelBox = true;">
                                                <icon class="w-3 h-3 dark:text-gray-300" name="edit" />
                                            </button>
                                        </label>
                                    </li>
                                </ul>
                                <button class="w-full mt-4 px-3 py-2 rounded cursor-pointer bg-gray-300 dark:bg-gray-700 dark:text-white hover:opacity-80 dark:hover:bg-gray-600" @click="showLabelBox = false; showEditLabelBox = true; label = {}"> {{ $t('Create a new label') }} </button>
                            </div>
                            <div class="absolute flex w-[300px] z-10 text-sm flex-col bg-white dark:bg-gray-800 px-4 py-4 rounded shadow dark:border dark:border-gray-700" v-if="showEditLabelBox">
                                <div class="absolute cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 top-3 left-3 p-1.5 rounded" @click="showEditLabelBox = false;showLabelBox = true"><icon class=" w-4 h-4 dark:text-gray-300" name="arrow-left" /></div>
                                <h4 class="text-center mb-3 font-bold dark:text-white">{{ $t('Edit Labels') }}</h4>
                                <div class="absolute cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 top-3 right-3 p-1.5 rounded" @click="showEditLabelBox = false"><icon class=" w-4 h-4 dark:text-gray-300" name="close" /></div>
                                <span class="w-full px-3 py-2 rounded cursor-pointer bg-gray-100 dark:bg-gray-700 hover:opacity-80" :style="{background: label.color}" :tabindex="0" :aria-label="label.name">{{ label.name }}</span>
                                <span class="title mt-4 font-bold mb-2 dark:text-gray-200">{{ $t('Title') }}</span>
                                <input class="border-[2px] px-2 py-1 border-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-[3px]" placeholder="" v-model="label.name" />
                                <span class="title mt-4 mb-1 font-bold dark:text-gray-200">{{ $t('Select a color') }}</span>
                                <div class="color__wrapper grid gap-1 mb-2 max-h-[120px] overflow-hidden overflow-y-auto">
                                    <div v-for="color in colors" class="h-8 box cursor-pointer">
                                        <div class="w-full h-full border-[2px] rounded border-transparent hover:border-red-600" :title="color.name" :aria-label="color.name" :style="{backgroundColor:color.color}" @click="label.color = color.color"></div>
                                    </div>
                                </div>
                                <div class="flex justify-between items-center action__buttons mt-2">
                                    <button type="button" class="small save" @click="saveLabel(label)">{{ $t('Save') }}</button>
                                    <button v-if="label.id" @click="deleteLabel(label.id);showEditLabelBox=false;showLabelBox=true" type="button" class="small cancel">{{ $t('Delete') }}</button>
                                </div>
                            </div>

                            <section class="s__2">
                                <div class="__details_top">
                                    <icon name="details" />
                                    <div class="flex-1">
                                        <span class="text-sm font-medium">{{ $t('Description') }}</span>
                                    </div>
                                    <icon @click="toggleDetails()" class="w-4 h-4 ml-auto cursor-pointer" name="edit" />
                                </div>
                                <div class="__details">
                                    <div v-if="!editDescription" class="prose pt-4 text-sm cursor-pointer" @click="onDescriptionClick" v-html="task.description || 'Add more details...'"></div>
                                    <section class="mt-4" v-if="editDescription">
                                        <CustomEditor
                                            ref="editDescription"
                                            v-model="task.description"
                                            :users="availableUsers"
                                            :show-status-bar="true"
                                            :enable-auto-save="true"
                                            :auto-save-interval="30000"
                                            @mention="onMention"
                                        />
                                        <div class="mt-2">
                                            <button type="button" class="inline-flex items-center rounded border border-gray-300 dark:border-gray-600 bg-blue-600 dark:bg-blue-700 text-white px-2.5 py-1.5 text-xs font-medium shadow-sm hover:bg-blue-700 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" @click="saveDetails();">{{ $t('Save') }}</button>
                                            <button @click="editDescription = false" type="button" class="inline-flex items-center rounded border border-transparent hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-700 dark:text-gray-200 px-2.5 py-1.5 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-0 ltr:ml-1 rtl:mr-1">{{ $t('Cancel') }}</button>
                                        </div>
                                    </section>
                                </div>

                            </section>

                            <section class="mt-6" id="checklist">
                                <div>
                                    <div class="flex">
                                        <Icon class="w-5 h-5 mr-3" name="checklist" />
                                        <div class="flex-1 border-b dark:border-gray-700 pb-2">
                                            <span class="text-sm font-medium dark:text-gray-300">{{ $t('Checklist') }}</span>
                                            <span class="ml-2 text-sm font-light dark:text-gray-400">{{ checklistDoneCount(task.checklists) }}/{{ task.checklists.length }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="pl-8 pt-4">
                                    <div class="space-y-4">
                                        <div v-for="(check_list, c_index) in task.checklists" class="group relative flex items-center">
                                            <div class="checklist-box2" v-if="!check_list.modify">
                                                <input class="inp-cbx" :id="'cbx-' + check_list.id" :checked="!!check_list.is_done" @click="check_list.is_done = $event.target.checked;saveCheckList(check_list.id, {is_done: check_list.is_done})" type="checkbox" style="display: none;"/>
                                                <label class="cbx" :for="'cbx-' + check_list.id">
                                                        <span>
                                                          <icon class="w-4 h-4" name="checklist_box_2" />
                                                        </span>
                                                    <span class="text-sm">{{ check_list.title }}</span>
                                                </label>
                                            </div>
                                            <div class="checklist-box2 pl-6 w-full" v-if="check_list.modify">
                                                <input :id="'modify_'+check_list.id" class="border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded p-2 text-sm bg-white w-full" v-model="check_list.title" @keyup="$event.keyCode === 13?modifyCheckListSubmit(check_list, c_index, task.checklists):''" />
                                                <div class="flex">
                                                    <div class="flex items-center action__buttons mt-2">
                                                        <button type="button" class="small save" @click="modifyCheckListSubmit(check_list, c_index, task.checklists)">
                                                            {{ $t('Save') }}</button>
                                                        <button @click="check_list.modify = false" type="button" class="small cancel">
                                                            {{ $t('Cancel') }}</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="absolute right-0 hidden pl-4 group-hover:flex" v-if="!check_list.modify">
                                                <icon class="w-4 h-4 mr-3 cursor-pointer" name="edit" @click="modifyCheck(check_list)" />
                                                <icon class="w-4 h-4 cursor-pointer" name="trash" @click="deleteCheckList(check_list.id, c_index, task.checklists)" />
                                            </div>
                                        </div>
                                        <div v-show="newCheckList" class="group relative flex">
                                            <div class="checklist-box2 pl-6 w-full">
                                                <input class="border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded p-2 text-sm bg-white w-full" ref="ncl" v-model="new_chek_list.title" @keyup="inputNewChecklistAction(new_chek_list, $event)" />
                                                <div class="flex">
                                                    <div class="flex items-center action__buttons mt-2">
                                                        <button type="button" class="small save" @click="inputNewChecklistAction(new_chek_list)">
                                                            {{ $t('Save') }}</button>
                                                        <button @click="newCheckList = false" type="button" class="small cancel">{{ $t('Cancel') }}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="group flex items-center mt-6" @click="openNewChecklist()">
                                        <icon class="w-5 h-5 dark:text-gray-300" name="add" />
                                        <span class="pl-2 text-sm group-hover:opacity-70 dark:text-gray-300">{{ $t('Add a new item') }}</span>
                                    </button>
                                </div>
                            </section>

                            <section class="mt-8">
                                <div>
                                    <div class="flex">
                                        <icon class="w-4 h-4 mr-3 mt-1" name="attachment" />
                                        <div class="flex-1 border-b dark:border-gray-700 pb-2">
                                            <span class="text-sm font-medium dark:text-gray-300">{{ $t('Attachments') }}</span>
                                            <span class="ml-2 text-sm font-light dark:text-gray-400">{{ task.attachments.length }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="pl-2 sm:pl-8 pt-4">
                                    <div class="flex flex-col gap-2 text-sm">
                                        <div v-for="(attachment, a_index) in task.attachments" class="__attachment flex flex-col sm:flex-row gap-3 py-3 sm:py-4 px-2 sm:px-0 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                            <div class="preview flex-shrink-0 self-start sm:self-auto" :aria-label="attachment.name">
                                                <div v-if="['jpeg','png','gif','jpg','svg','webp','bmp'].includes(attachment.name.split('.').pop())" class="w-16 h-16 sm:w-20 sm:h-20 rounded bg-cover bg-center" :style="{'backgroundImage': `url(${attachment.path})`}" :alt="attachment.name" />
                                                <div v-else class="w-16 h-16 sm:w-20 sm:h-20 rounded bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">{{ attachment.name.split('.').pop() }}</div>
                                            </div>
                                            <div class="flex flex-col gap-2 w-full min-w-0">
                                                <div class="font-bold dark:text-gray-200">
                                                  <a :href="attachment.path" target="_blank" class="block break-words text-sm sm:text-base dark:text-blue-400 hover:underline" >
                                                    {{ attachment.name }}
                                                  </a>
                                                </div>
                                                <div class="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm dark:text-gray-400">
                                                    <span class="whitespace-nowrap" :aria-label="moment(attachment.created_at).format('MMMM D, YYYY h:mm A')">{{ moment(attachment.created_at).format('MMM D, YYYY') }}</span>
                                                    <span class="hidden sm:inline">-</span>
                                                    <span class="flex underline cursor-pointer dark:text-gray-300 whitespace-nowrap" @click="deleteAttachment(attachment.id, a_index)">{{ $t('Delete') }}</span>
                                                </div>
                                                <div class="flex flex-wrap gap-2 sm:gap-1 text-xs sm:text-sm">
                                                    <a class="cover dark:text-gray-300 flex items-center gap-1 px-2 py-1 sm:px-0 sm:py-0 rounded sm:rounded-none hover:bg-gray-200 dark:hover:bg-gray-600 sm:hover:bg-transparent" :href="attachment.path" :download="attachment.name">
                                                        <icon name="download" class="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 
                                                        <span>{{ $t('Download') }}</span>
                                                    </a>
                                                    <div v-if="['jpeg','png','gif','jpg','svg','webp','bmp'].includes(attachment.name.split('.').pop())" class="cover dark:text-gray-300 flex items-center gap-1 px-2 py-1 sm:px-0 sm:py-0 rounded sm:rounded-none cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 sm:hover:bg-transparent" @click="makeCover(task, attachment)">
                                                        <icon name="image" class="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 
                                                        <span>{{ $t('Make Cover') }}</span>
                                                    </div>
                                                    <div v-if="task.cover && task.cover.id === attachment.id" class="cover dark:text-gray-300 flex items-center gap-1 px-2 py-1 sm:px-0 sm:py-0 rounded sm:rounded-none cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 sm:hover:bg-transparent" @click="removeCover(task)">
                                                        <icon name="image" class="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 
                                                        <span>{{ $t('Remove Cover') }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="mt-8">
                                <div>
                                    <div class="flex">
                                        <icon class="w-4 h-4 mr-3 mt-1" name="comments" />
                                        <div class="flex-1 border-b dark:border-gray-700 pb-2">
                                            <span class="text-sm font-medium dark:text-gray-300">{{ $t('Activities') }}</span>
                                            <span class="ml-2 text-sm font-light dark:text-gray-400">{{ filteredActivities.length }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="pl-8 pt-4">
                                    <div>
                                        <div v-if="!showCommentBox" class="mt-1 mb-4 cursor-pointer rounded-md border border-gray-300 dark:border-gray-600 hover:shadow dark:hover:shadow-lg">
                                            <p @click="showCommentBox = true" class="px-3 py-2 text-sm dark:text-gray-300">
                                                {{ $t('Write a comment...') }}
                                            </p>
                                        </div>

                                        <form v-if="showCommentBox" class="mt-1 mb-4 rounded-md border border-gray-300 dark:border-gray-600" enctype="multipart/form-data">
                                            <CustomEditor
                                                ref="newCommentEditor"
                                                v-model="new_comment.details"
                                                :placeholder="$t('Write a comment...')"
                                                :users="availableUsers"
                                                :show-status-bar="false"
                                                :enable-auto-save="false"
                                                @mention="onMention"
                                            />

                                            <div class="flex items-center px-3 pt-2 pb-3">
                                                <div class="flex items-center">
                                                    <button @click="saveNewComment({details: new_comment.details, task_id: task.id, user_id: $page.props.auth.user.id}, task.activities)" type="button" class="inline-flex items-center rounded border border-gray-300 dark:border-gray-600 bg-blue-600 dark:bg-blue-700 text-white px-2.5 py-1.5 text-xs font-medium shadow-sm hover:bg-blue-700 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                        {{ $t('Save') }}</button>
                                                    <button @click="showCommentBox = false" type="button" class="inline-flex items-center rounded border border-transparent hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-700 dark:text-gray-200 px-2.5 py-1.5 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-0 ltr:ml-1 rtl:mr-1">{{ $t('Cancel') }}</button>
                                                </div>

                                                <div class="ml-auto hidden flex">
                                                    <label class="cursor-pointer">
                                                        <input :accept="allowed_file_types" class="hidden" type="file" @change="uploadAttachment($event, true)">
                                                        <icon class="w-4 h-4" name="attachment" />
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="space-y-4">
                                        <div v-if="filteredActivities.length === 0" class="text-gray-500 dark:text-gray-400 text-sm">No activities yet.</div>

                                        <ul v-else class="divide-y divide-gray-200 dark:divide-gray-700">
                                            <li v-for="activity in filteredActivities" :key="activity.id" class="py-2">
                                                <div v-if="['comment', 'comment_edit'].includes(activity.field_changed) && activity.comment" class="comment__ group relative flex py-1">
                                                    <div class="h-6 w-6">
                                                        <span class="block rounded-full h-6 w-6">
                                                            <img v-if="activity.user?.photo_path" class="h-full w-full rounded-full" :src="activity.user.photo_path" alt="User Photo">
                                                            <img v-else class="h-full w-full rounded-full" src="/images/user.svg" alt="Default Avatar">
                                                        </span>
                                                    </div>

                                                    <div class="group flex-1 ltr:pl-4 rtl:pr-4 w-full">
                                                        <div class="flex">
                                                            <h2 v-if="activity.user" class="flex text-sm font-medium leading-none dark:text-gray-200">
                                                                {{ activity.user?.first_name + ' ' + activity.user?.last_name }}
                                                            </h2>
                                                            <span class="text-xs font-normal text-gray-500 dark:text-gray-400 ltr:ml-3 rtl:mr-3">
                                                                {{ moment(activity.comment?.created_at).format('MMMM D, YYYY [at] h:mm a') }}
                                                                <small v-if="moment(activity.comment?.updated_at).isAfter(moment(activity.comment?.created_at))">(edited)</small>
                                                            </span>
                                                            <div class="ml-auto">
                                                                <div class="absolute right-0 hidden pl-4 group-hover:flex" v-if="$page.props.auth.user.id === activity.user?.id">
                                                                    <icon class="w-3 h-3 mr-3 cursor-pointer" name="edit" @click="activity.comment.modify = true" />
                                                                    <icon class="w-3 h-3 cursor-pointer" name="trash" @click="deleteComment(activity.comment.id, task.activities, activity.id)" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div v-if="activity.comment.modify" class="checklist-box2 pt-3 w-full">
                                                            <CustomEditor
                                                                :ref="'editComment' + activity.comment.id"
                                                                v-model="activity.comment.details"
                                                                :placeholder="$t('Edit comment...')"
                                                                :users="availableUsers"
                                                                :show-status-bar="false"
                                                                :enable-auto-save="false"
                                                                @mention="onMention"
                                                            />
                                                            <div class="flex items-center action__buttons mt-2">
                                                                <button type="button" class="small save" @click="saveComment(activity.comment.id, activity.comment); activity.comment.modify = false">
                                                                    {{ $t('Save') }}
                                                                </button>
                                                                <button @click="activity.comment.modify = false" type="button" class="small cancel">
                                                                    {{ $t('Cancel') }}
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div class="prose text-sm pt-1 t_a_h" v-if="!activity.comment.modify" v-html="activity.comment.details"></div>
                                                    </div>
                                                </div>

                                                <div v-if="['title', 'slug', 'list_id', 'order', 'due_date', 'is_done', 'is_archive', 'comment_delete', 'description', 'cover'].includes(activity.field_changed)" class="flex items-center space-x-3">
                                                    <img v-if="activity.user?.photo_path" :src="activity.user.photo_path" alt="User Avatar" class="w-8 h-8 rounded-full" />
                                                    <div>
                                                        <p class="text-sm text-gray-700 dark:text-gray-300">
                                                            <strong class="pr-1 dark:text-gray-200">{{ activity.user?.first_name }} {{ activity.user?.last_name }}</strong>
                                                            <span v-if="['title', 'slug', 'list_id', 'order', 'due_date'].includes(activity.field_changed)">
                                                                {{ activity.old_value }} → {{ activity.new_value }}
                                                            </span>
                                                            <span v-if="['is_done', 'is_archive'].includes(activity.field_changed)">
                                                                {{ activity.old_value }}.
                                                            </span>
                                                            <span v-if="activity.field_changed === 'description'"> updated the description.</span>
                                                            <span v-if="activity.field_changed === 'cover'"> updated the cover image.</span>
                                                            <span v-if="activity.field_changed === 'comment_delete'"> deleted a comment.</span>
                                                        </p>
                                                        <p class="text-xs pt-1 text-gray-500 dark:text-gray-400">{{ moment(activity.created_at).format('MMMM D, YYYY [at] h:mm a') }}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </main>

                        <div v-if="showManualTimeOption" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm" @click.self="closeManualTimeModal">
                            <div class="relative w-full max-w-md mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                                <!-- Header -->
                                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                                <icon name="clock" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ $t('Add Time Manually') }}</h3>
                                                <p class="text-sm text-gray-600 dark:text-gray-300">{{ $t('Log time spent on this task') }}</p>
                                            </div>
                                        </div>
                                        <button @click="closeManualTimeModal" class="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
                                            <icon name="close" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                        </button>
                                    </div>
                                </div>

                                 <!-- Content -->
                                 <div class="p-6 space-y-6 relative overflow-visible">
                                    <!-- Memo Field -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <icon name="note" class="w-4 h-4 inline mr-1" />
                                            {{ $t('Description') }}
                                        </label>
                                        <textarea
                                            v-model="manual_time.title"
                                            :placeholder="$t('What did you work on? (optional)')"
                                            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                                            rows="2"
                                        ></textarea>
                                    </div>

                                    <!-- Quick Time Presets -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            <icon name="zap" class="w-4 h-4 inline mr-1" />
                                            {{ $t('Quick Add') }}
                                        </label>
                                        <div class="grid grid-cols-2 gap-2">
                                            <button
                                                v-for="preset in timePresets"
                                                :key="preset.label"
                                                @click="applyTimePreset(preset)"
                                                class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 rounded-lg transition-colors"
                                            >
                                                {{ preset.label }}
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Date Selection -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <icon name="calendar" class="w-4 h-4 inline mr-1" />
                                            {{ $t('Date') }}
                                        </label>
                                        <DatePicker
                                            v-model="manual_time.date"
                                            :placeholder="$t('Select Date')"
                                            class="w-full"
                                        />
                                    </div>

                                    <!-- Time Range -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            <icon name="clock" class="w-4 h-4 inline mr-1" />
                                            {{ $t('Time Range') }}
                                        </label>
                                        <div class="grid grid-cols-2 gap-4">
                                            <div>
                                                <label class="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{{ $t('Start Time') }}</label>
                                                <DateTimePicker
                                                    :modelValue="ensureDateObject(manual_time.start_time)"
                                                    @update:modelValue="manual_time.start_time = $event"
                                                    :is24Hour="is24HourFormat"
                                                    :placeholder="$t('Start')"
                                                    @change="updateManualStart"
                                                    class="w-full"
                                                />
                                            </div>
                                            <div>
                                                <label class="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{{ $t('End Time') }}</label>
                                                <DateTimePicker
                                                    :modelValue="ensureDateObject(manual_time.end_time)"
                                                    @update:modelValue="manual_time.end_time = $event"
                                                    :is24Hour="is24HourFormat"
                                                    :placeholder="$t('End')"
                                                    class="w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Duration Display -->
                                    <div v-if="composedStart && composedEnd" class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center gap-2">
                                                <icon name="timer" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('Duration') }}</span>
                                            </div>
                                            <div class="text-right">
                                                <div class="text-lg font-bold text-blue-600 dark:text-blue-400">
                                                    {{ formatDuration(composedStart, composedEnd) }}
                                                </div>
                                                <div class="text-xs text-gray-500 dark:text-gray-400">
                                                    {{ Math.floor(moment.duration(moment(composedEnd).diff(moment(composedStart))).asMinutes()) }} {{ $t('minutes') }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Validation Messages -->
                                    <div v-if="manualTimeError" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                                        <div class="flex items-center gap-2">
                                            <icon name="exclamation-triangle" class="w-4 h-4 text-red-600 dark:text-red-400" />
                                            <span class="text-sm text-red-700 dark:text-red-300">{{ manualTimeError }}</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Footer -->
                                <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 flex gap-3">
                                    <button
                                        @click="closeManualTimeModal"
                                        class="flex-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors"
                                    >
                                        {{ $t('Cancel') }}
                                    </button>
                                    <button
                                        @click="addTime"
                                        :disabled="!canAddTime"
                                        class="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center justify-center gap-2"
                                    >
                                        <icon name="plus" class="w-4 h-4" />
                                        {{ $t('Add Time') }}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <aside class="divide-y divide-gray-200 dark:divide-gray-700 px-6 py-6">
                            <section class="py-3">
                                <h2 class="px-2 text-sm font-medium dark:text-gray-300">
                                    {{ $t('Move Task') }}
                                </h2>

                                <div class="relative">
                                    <div>
                                        <div class="group mt-2 flex cursor-pointer items-center td__btn rounded-md px-2 py-1.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600" @click="displayMoveCard();is_move=true;">
                                            <span class="block h-3.5 text-xs leading-none dark:text-gray-200">{{ task.list.title }}</span>
                                            <icon class="w-3.5 h-3.5 ml-auto cursor-pointer dark:text-gray-300" name="arrow-down" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="py-3">
                                <WatchButton :watchable-id="task.id" watchable-type="Task" :is-watching="task.is_watched_by_user" />
                            </section>
                            <section class="py-3.5">
                                <div class="flex items-center px-2">
                                    <h2 class="text-sm font-medium dark:text-gray-300">
                                        {{ $t('Assignees') }}
                                    </h2>

                                    <div class="relative ml-auto" modal="true" name="task-assign">
                                        <div>
                                            <span class="cursor-pointer" @click="showAssigneeBox = true"><icon class="h-5 w-5 hover:opacity-80 dark:text-gray-300" name="add" /></span>
                                        </div>

                                        <div class="absolute right-1 flex w-[300px] z-10 text-sm flex-col bg-white dark:bg-gray-800 px-4 py-4 rounded shadow dark:border dark:border-gray-700" v-if="showAssigneeBox">
                                            <h4 class="text-center mb-3 font-bold dark:text-white">{{ $t('Assignee') }}</h4>
                                            <div class="absolute cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 top-3 right-3 p-1.5 rounded" @click="showAssigneeBox = false" >
                                                <icon class=" w-4 h-4 dark:text-gray-300" name="close" />
                                            </div>
                                            <input id="t_d_s_u" v-model="user_search" class="border-[2px] px-2 py-1 border-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-[3px] dark:placeholder-gray-400" :placeholder="$t('Search User')" />
                                            <ul class="flex flex-col mt-3 gap-1 h-48 max-h-48 overflow-y-auto">
                                                <li v-for="(userObject, user_index) in searchUser(user_search)">
                                                    <label :for="'td_u_id_'+user_index" class="flex p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                                                        <input :id="'td_u_id_'+user_index" class="w-5 ml-1 mr-2" type="checkbox" :checked="task_assignees().includes(userObject.user_id)" @change="assignUserToTask($event.target.checked, userObject.user_id)">
                                                        <img v-if="userObject.user.photo_path" :aria-label="userObject.user.name" :alt="userObject.user.name" class="w-6 h-6 rounded-full" :src="userObject.user.photo_path" />
                                                        <img v-else :aria-label="userObject.user.name" :alt="userObject.user.name" class="w-6 h-6 rounded-full" src="/images/user.svg" />
                                                        <span data-a="" class="p-1 dark:text-gray-200" type="button" :tabindex="user_index">
                                                                {{ userObject.user.name }}
                                                            </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-wrap gap-1 px-2 mb-1 pt-2">
                                      <span v-for="assignee in task.assignees" :aria-label="assignee.user.name" data-a="" class="block rounded-full h-8 w-8 border-2 border-white">
                                          <img v-if="assignee.user.photo_path" class="h-full w-full rounded-full" :src="assignee.user.photo_path" :alt="assignee.user.name">
                                          <img v-else class="h-full w-full rounded-full" src="/images/user.svg" :alt="assignee.user.name">
                                      </span>
                                </div>
                            </section>

                            <section class="py-4">
                                <div class="flex px-2 text-sm font-medium dark:text-gray-300 justify-between">
                                    {{ $t('Time Count') }}
                                    <span v-if="!this.activeTimerString && task_assignees().includes($page.props.auth.user.id)" class="cursor-pointer items-center flex" @click="showManualTimeOption = true"><icon class="h-4 w-4 hover:opacity-80 dark:text-gray-300" name="add" /> <span class="text-xs dark:text-gray-300">Manual</span></span>
                                </div>
                                <!-- Enhanced Manual Time Modal -->


                                <div class="mt-3 flex justify-between items-center px-2">
                                    <div class="flex gap-1 items-center">
                                        <p class="dark:text-gray-200">
                                            {{ totalTime() }}
                                        </p>
                                    </div>
                                    <button v-if="!!this.activeTimerString && task_assignees().includes(Number($page.props.auth.user.id))" class="py-2 w-[70px] bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-800 rounded text-[12px] text-white select-none" @click="stopTracker()">{{ $t('STOP') }}</button>
                                    <button v-else-if="!existing_timer && task_assignees().includes(Number($page.props.auth.user.id))" class="py-2 w-[70px] bg-blue-600 dark:bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-900 rounded text-[12px] text-white select-none" @click="startTracker()">{{ $t('START') }}</button>
                                </div>
                            </section>
                            <section class="py-3">
                                <h2 class="px-2 text-sm font-medium dark:text-gray-300">
                                    {{ $t('Due Date') }}
                                </h2>
                                <div class="relative" modal="true">
                                    <div>
                                        <div class="group mt-2 flex cursor-pointer items-center rounded-md py-1.5">
                                            <DateTimePicker
                                                v-model="task.due_date"
                                                @change="saveTask({due_date: moment(task.due_date).format('YYYY-MM-DD HH:mm')})"
                                                @update:is24Hour="is24HourFormat = $event"
                                                placeholder="Select Date & Time"
                                                :is24Hour="is24HourFormat"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="py-3">
                                <div class="mt-2 space-y-2 px-1">
                                    <label class="flex cursor-pointer w-full items-center rounded bg-gray-200 dark:bg-gray-700 td__btn hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-2 text-xs font-medium dark:text-gray-200 focus:outline-none focus:ring-0">
                                        <input :accept="allowed_file_types" @change="uploadAttachment($event)" class="hidden" type="file"/>
                                        <icon class="mr-2 h-4 w-4 dark:text-gray-300" name="attachment" />
                                        {{ $t('Attachment') }}
                                    </label>
                                    <button v-if="!this.task.is_archive" @click="saveTask({ is_archive: 1 });this.task.is_archive = true" class="flex td__btn w-full items-center rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-2 text-xs font-medium dark:text-gray-200 focus:outline-none focus:ring-0">
                                        <icon class="mr-2 h-4 w-4 dark:text-gray-300" name="archive" />
                                        {{ $t('Archive') }}
                                    </button>
                                    <button v-else @click="saveTask({ is_archive: 0 });this.task.is_archive = false" class="flex td__btn w-full items-center py-1.5 text-xs font-medium rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-2 dark:text-gray-200">
                                        <icon class="mr-2 h-4 w-4 dark:text-gray-300" name="undo" />
                                        {{ $t('Revert Back') }}
                                    </button>
                                    <button v-if="this.task.is_archive" @click="deleteTask()" class="flex w-full text-white items-center td__btn py-1.5 text-xs font-medium rounded bg-red-700 dark:bg-red-800 hover:bg-red-800 dark:hover:bg-red-900 px-3 py-2">
                                        <icon class="mr-2 h-4 w-4 fill-white" name="dash" />
                                        {{ $t('Delete') }}
                                    </button>

                                    <!-- Google Calendar Sync Button -->
                                    <button
                                        v-if="task.due_date"
                                        @click="toggleGoogleCalendar()"
                                        :disabled="googleSyncing"
                                        class="flex td__btn w-full items-center rounded px-3 py-2 text-xs font-medium focus:outline-none focus:ring-0 disabled:opacity-50"
                                        :class="task.google_event_id
                                            ? 'bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300'
                                            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-gray-200'"
                                    >
                                        <svg class="mr-2 h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                        </svg>
                                        <span v-if="googleSyncing">{{ $t('Syncing...') }}</span>
                                        <span v-else-if="task.google_event_id">{{ $t('Remove from Google Calendar') }}</span>
                                        <span v-else>{{ $t('Add to Google Calendar') }}</span>
                                    </button>
                                </div>
                            </section>

                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Mention Popover -->
    <div
        v-if="showMentionPopup && clickedMentionUser"
        class="mention-popup"
        :style="mentionPopupStyle"
        @click.stop
    >
        <div class="mention-popup__header">
            <div class="mention-popup__avatar">
                <img v-if="clickedMentionUser.avatar" :src="clickedMentionUser.avatar" :alt="clickedMentionUser.name">
                <div v-else class="mention-popup__avatar-placeholder">
                    {{ clickedMentionUser.name.charAt(0).toUpperCase() }}
                </div>
            </div>
            <div class="mention-popup__info">
                <div class="mention-popup__name">{{ clickedMentionUser.name }}</div>
                <div class="mention-popup__email">{{ clickedMentionUser.email }}</div>
            </div>
            <button @click="hideMentionPopup" class="mention-popup__close">
                <Icon name="times" class="w-4 h-4" />
            </button>
        </div>
        <div class="mention-popup__content">
            <div class="mention-popup__details">
                <div class="mention-popup__detail-item" v-if="clickedMentionUser.role">
                    <Icon name="user-tag" class="w-4 h-4" />
                    <span>{{ clickedMentionUser.role }}</span>
                </div>
                <div class="mention-popup__detail-item" v-if="clickedMentionUser.department">
                    <Icon name="building" class="w-4 h-4" />
                    <span>{{ clickedMentionUser.department }}</span>
                </div>
                <div class="mention-popup__detail-item" v-if="clickedMentionUser.lastActive">
                    <Icon name="clock" class="w-4 h-4" />
                    <span>Last active {{ clickedMentionUser.lastActive }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Head, Link} from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import Loader from '@/Shared/Loader.vue'
import DatePicker from '@/Shared/Components/DatePicker.vue'
import DateTimePicker from '@/Shared/Components/DateTimePicker.vue'
import moment from 'moment'
import 'moment-duration-format';
import CustomEditor from '@/Shared/Components/CustomEditor.vue';
import WatchButton from '@/Components/WatchButton.vue';
import axios from 'axios'

export default {
    props: {
        id: {
            required: true,
        },
        isPopup: Boolean,
        view: { required: false },
    },
    emits: {closeModal: null},
    data() {
        return {
            // manual_time: { start: null, end: null, seconds: 0, title: '' },
            manual_time: { date: null, start_time: null, end_time: null, start: null, end: null, seconds: 0, title: '' },
            showManualTimeOption: false,
            is24HourFormat: false,
            showAssigneeBox: false,
            availableUsers: [],
            editDescription: false,
            showCommentBox: false,
            showLabelBox: false,
            showMoveCard: false,
            is_move: false,
            label_search: '',
            user_search: '',
            showEditLabelBox: false,
            loading: true,
            newCheckList: false,
            labels: null,
            existing_timer: null,
            users: null,
            list_items: null,
            projects: null,
            counter: { seconds: 0, timer: null, duration: 0 },
            activeTimerString: '',
            new_chek_list: {},
            move_object: {},
            new_comment: {},
            label: {},
            task: {},
            googleSyncing: false,
            allowed_file_types: (() => {
                const types = this?.$page?.props?.settings?.allowed_file_types;
                try {
                    const parsed = Array.isArray(types) ? types : JSON.parse(types);
                    const cleaned = parsed
                        .map(t => t.startsWith('.') ? t : '.' + t)
                        .filter(Boolean);

                    return cleaned.length ? cleaned.join(',') : '.jpg,.jpeg,.png,.gif,.webp,.svg';
                } catch {
                    return '.jpg,.jpeg,.png,.gif,.webp,.svg';
                }
            })(),
            colors: [
                {'name': 'subtle green', 'color': '#baf3db'}, {'name': 'subtle yellow', 'color': '#f8e6a0'}, {'name': 'subtle orange', 'color': '#ffe2bd'}, {'name': 'subtle red', 'color': '#ffd2cc'}, {'name': 'subtle purple', 'color': '#dfd8fd'},
                {'name': 'green', 'color': '#4bce97'}, {'name': 'yellow', 'color': '#e2b203'}, {'name': 'orange', 'color': '#faa53d'}, {'name': 'red', 'color': '#f87462'}, {'name': 'purple', 'color': '#9f8fef'},
                {'name': 'bold green', 'color': '#1f845a'}, {'name': 'bold yellow', 'color': '#946f00'}, {'name': 'bold orange', 'color': '#b65c02'}, {'name': 'bold red', 'color': '#ca3521'}, {'name': 'bold purple', 'color': '#6e5dc6'},
                {'name': 'subtle blue', 'color': '#cce0ff'}, {'name': 'subtle sky', 'color': '#c1f0f5'}, {'name': 'subtle lime', 'color': '#D3F1A7'}, {'name': 'subtle pink', 'color': '#fdd0ec'}, {'name': 'subtle black', 'color': '#dcdfe4'},
                {'name': 'blue', 'color': '#579dff'}, {'name': 'sky', 'color': '#60c6d2'}, {'name': 'lime', 'color': '#94c748'}, {'name': 'pink', 'color': '#e774bb'}, {'name': 'black', 'color': '#8590a2'},
                {'name': 'bold blue', 'color': '#0c66e4'}, {'name': 'bold sky', 'color': '#1d7f8c'}, {'name': 'bold lime', 'color': '#5b7f24'}, {'name': 'bold pink', 'color': '#ae4787'}, {'name': 'bold black', 'color': '#626f86'},
            ],
            // Mention popup properties
            showMentionPopup: false,
            mentionPopupPosition: { top: 0, left: 0 },
            clickedMentionUser: null,
            // Enhanced manual time properties
            manualTimeError: null,
            timePresets: [
                { label: '15 min', hours: 0, minutes: 15 },
                { label: '30 min', hours: 0, minutes: 30 },
                { label: '1 hour', hours: 1, minutes: 0 },
                { label: '2 hours', hours: 2, minutes: 0 },
                { label: '4 hours', hours: 4, minutes: 0 },
                { label: '8 hours', hours: 8, minutes: 0 }
            ],
        }
    },
    components: {
        Icon, Loader, Link, DatePicker, DateTimePicker, CustomEditor, Head, WatchButton
    },
    computed: {
        filteredActivities() {
            if (!this.task.activities || !Array.isArray(this.task.activities)) {
                return [];
            }

            return this.task.activities.filter(activity => {
                // Handle comment-related activities
                if (activity.field_changed === 'comment' || activity.field_changed === 'comment_edit') {
                    // Only show comments that still exist (not deleted)
                    return activity.comment && activity.comment.id;
                }

                // Handle other activity types
                const allowedFieldChanges = [
                    'title', 'slug', 'list_id', 'order', 'due_date',
                    'is_done', 'is_archive', 'comment_delete', 'description', 'cover'
                ];

                return allowedFieldChanges.includes(activity.field_changed);
            });
        },

        composedStart(){
            return this.composeDateTime(this.manual_time.start_time);
        },
        composedEnd(){
            return this.composeDateTime(this.manual_time.end_time);
        },

        mentionPopupStyle() {
            return {
                position: 'fixed',
                top: `${this.mentionPopupPosition.top}px`,
                left: `${this.mentionPopupPosition.left}px`,
                zIndex: 1001
            };
        },

        canAddTime() {
            return this.composedStart && this.composedEnd && !this.manualTimeError;
        },
    },
    watch: {
        'manual_time.start_time'() {
            this.manualTimeError = null;
        },
        'manual_time.end_time'() {
            this.manualTimeError = null;
        },
        'manual_time.date'() {
            this.manualTimeError = null;
        },
    },
    methods: {
        composeDateTime(time){
            if(!this.manual_time.date || !time) return null;
            const d = this.moment(this.manual_time.date);
            const t = this.moment(time);
            return d.clone().set({ hour: t.hour(), minute: t.minute(), second: 0, millisecond: 0 }).toDate();
        },

        // Ensure proper Date object for DateTimePicker
        ensureDateObject(value) {
            if (!value) return null;
            if (value instanceof Date) return value;
            if (this.moment.isMoment(value)) return value.toDate();
            if (typeof value === 'string') return new Date(value);
            return null;
        },

        onDescriptionClick(event) {
            // Check if clicking on a mention
            const mentionElement = event.target.closest('.mention');
            if (mentionElement) {
                event.stopPropagation(); // Prevent triggering toggleDetails()
                const userId = mentionElement.getAttribute('data-user-id');
                const user = this.availableUsers.find(u => u.id == userId);
                if (user) {
                    this.clickedMentionUser = user;
                    this.showMentionPopup = true;

                    // Position the popup
                    this.$nextTick(() => {
                        const mentionRect = mentionElement.getBoundingClientRect();

                        this.mentionPopupPosition = {
                            top: mentionRect.top - 10, // 10px above
                            left: mentionRect.left
                        };
                    });
                }
            } else {
                // If not clicking on a mention, toggle details edit mode
                this.toggleDetails();
            }
        },

        hideMentionPopup() {
            this.showMentionPopup = false;
            this.clickedMentionUser = null;
        },

        // Enhanced manual time methods
        closeManualTimeModal() {
            this.showManualTimeOption = false;
            this.manualTimeError = null;
            this.resetManualTime();
        },

        resetManualTime() {
            this.manual_time = {
                date: null,
                start_time: null,
                end_time: null,
                start: null,
                end: null,
                seconds: 0,
                title: ''
            };
        },

        applyTimePreset(preset) {
            const now = this.moment();
            this.manual_time.start_time = now.clone().subtract(preset.hours, 'hours').subtract(preset.minutes, 'minutes').toDate();
            this.manual_time.end_time = now.clone().toDate();
            this.manual_time.date = now.format('YYYY-MM-DD');
            this.manualTimeError = null;
        },

        formatDuration(start, end) {
            const duration = this.moment.duration(this.moment(end).diff(this.moment(start)));
            const hours = Math.floor(duration.asHours());
            const minutes = duration.minutes();

            if (hours > 0) {
                return `${hours}h ${minutes}m`;
            }
            return `${minutes}m`;
        },

        validateManualTime() {
            this.manualTimeError = null;

            if (!this.manual_time.start || !this.manual_time.end) {
                this.manualTimeError = 'Please select both start and end times.';
                return false;
            }

            if (this.moment(this.manual_time.end).isBefore(this.manual_time.start)) {
                this.manualTimeError = 'End time must be after start time.';
                return false;
            }

            const duration = this.moment.duration(this.moment(this.manual_time.end).diff(this.moment(this.manual_time.start)));
            const totalMinutes = duration.asMinutes();

            if (totalMinutes > 600) { // 10 hours
                this.manualTimeError = 'You cannot add more than 10 hours at a time.';
                return false;
            }

            if (this.moment(this.manual_time.end).isAfter(this.moment())) {
                this.manualTimeError = 'End time cannot be in the future.';
                return false;
            }

            const taskDate = this.moment(this.task.created_at).utc();
            if (this.moment(this.manual_time.start).isBefore(taskDate)) {
                this.manualTimeError = 'Start time must be after task creation date.';
                return false;
            }

            return true;
        },
        addTime(){
            this.manual_time.start = this.composeDateTime(this.manual_time.start_time);
            this.manual_time.end = this.composeDateTime(this.manual_time.end_time);

            if (!this.validateManualTime()) {
                return;
            }

            this.manual_time.seconds = parseInt(
                this.moment.duration(this.moment(this.manual_time.end).diff(this.moment(this.manual_time.start))).asSeconds()
            );

            this.counter.duration = parseInt(this.counter.duration) + this.manual_time.seconds;
            this.manual_time.task_id = this.task.id;

            axios.post(this.route('task.timer.manual'), this.manual_time)
                .then(() => {
                    this.closeManualTimeModal();
                    // Show success feedback
                    this.$nextTick(() => {
                        // You could add a toast notification here
                    });
                })
                .catch((error) => {
                    this.manualTimeError = 'Failed to add time. Please try again.';
                    console.error('Error adding manual time:', error);
                });
        },
        // updateManualStart(){
        //     this.manual_time.end = this.moment(this.manual_time.start).add(1, 'hour').toDate();
        // },
        updateManualStart(){
            const t = this.manual_time.start_time;
            // If the time-picker returns a plain object: { hours, minutes, seconds }
            if (t && typeof t === 'object' && 'hours' in t) {
                const hours = ((t.hours ?? 0) + 1) % 24;
                const minutes = t.minutes ?? 0;
                const seconds = t.seconds ?? 0;
                // Create a proper Date object for end_time
                const now = this.moment();
                this.manual_time.end_time = now.clone()
                    .hour(hours)
                    .minute(minutes)
                    .second(seconds)
                    .toDate();
                return;
            }
            // Fallback: if it's a Date (or Moment), keep previous behavior
            if (t) {
                this.manual_time.end_time = this.moment(t).add(1, 'hour').toDate();
            }
        },
        openNewChecklist(){
            this.newCheckList = true;
            const ref = this.$refs.ncl;
            setTimeout(function(){ ref.focus();},0);
        },
        async imageButtonClickHandler() {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.click();
            input.onchange = async () => {
                const file = input.files[0];
                this.$refs.editDescription.focus();
            };

        },
        async get_average_rgb(src) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = "anonymous"; // avoid CORS issues
                img.src = src;

                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;

                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);

                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const data = imageData.data;

                    const colorCount = {};
                    for (let i = 0; i < data.length; i += 4) {
                        const r = data[i];
                        const g = data[i + 1];
                        const b = data[i + 2];
                        const key = `${r},${g},${b}`;

                        colorCount[key] = (colorCount[key] || 0) + 1;
                    }

                    const dominantColor = Object.entries(colorCount).sort((a, b) => b[1] - a[1])[0][0];
                    resolve(`rgb(${dominantColor})`);
                };

                img.onerror = reject;
            });
        },
        async makeCover(task, attachment){
            task.cover = attachment;
            await this.saveTask({cover: attachment.id});
            this.$refs.t__cover.style.backgroundColor = await this.get_average_rgb(task.cover.path)
        },
        removeCover(task){
            this.saveTask({cover: null});
            task.cover = null;
        },
        toggleDetails(){
            this.editDescription = true
        },
        onEditorReady(editor){editor.focus();},
        deleteAttachment(id, index){
            if(this.task.cover && (this.task.cover.id === id)){
                this.task.cover = null;
            }
            axios.post(this.route('task.attachment.delete', id), {}).then((response) => {
                if(response.data){
                    this.task.attachments.splice(index, 1);
                }
            });
        },
        async uploadAttachment(e, is_comment){
            e.preventDefault();
            if(!e.target.files.length){
                return;
            }
            const file = e.target.files[0];
            if(this.task.is_demo && (file.size/1024)/1024>2){
                alert('Uploading is limited to 2MB in demo mode. Please choose a file smaller than 2MB.');
                return;
            }
            const obj = await this.uploadFile(file)
            if(obj && obj.error){
                alert(obj?.message);
            }else{
                this.task.attachments.push(obj)
                if(is_comment){
                    const name = ['jpeg','png','gif','jpg','svg','webp','bmp'].includes(obj.name.split('.').pop())?`<img src="${obj.path}" alt="${obj.name}" />`:`${obj.name}`;
                    const link = `<br/><a href="${obj.path}" target="_blank">${name}</a><br/>`;
                    this.new_comment.details = this.new_comment.details || '' + link;
                }
            }
        },
        async uploadFile(file){
            let formData = new FormData();
            formData.append("file", file);
            const resp = await axios.post(this.route('task.attachment.add', this.task.id), formData,{
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            return resp.data;
        },
        goToLink(link){ window.location.href = link; },
        startTimer(start_now){
            let started = this.counter.timer.started_at ? this.moment.utc(this.counter.timer.started_at) : this.moment();
            let seconds = parseInt(this.moment.duration(this.moment().diff(started)).asSeconds())

            seconds = this.counter.timer.duration + seconds;
            this.counter.ticker = setInterval(() => {
                this.counter.seconds = ++seconds;
                // this.activeTimerString = this.moment.duration(this.counter.seconds + parseInt(this.counter.duration), 'seconds').format('h[h] m[m] s[s]')
                this.activeTimerString = this.moment.utc(moment.duration(this.counter.seconds + parseInt(this.counter.duration),'seconds').as('milliseconds')).format('H[h] m[m] s[s]')
            }, 1000)
            if(start_now){
                this.eTimer(this.counter)
            }
        },
        eTimer(counter, stopped){
            this.$page.props.counter = counter
            this.$page.props.tracker = {started: true}
            if(stopped){
                this.$page.props.tracker.started = false;
            }
        },
        startTracker(){
            axios.post(this.route('task.timer.start'), {task_id: this.task.id}).then((response) => {
                if(response.data){
                    this.counter.timer = response.data;
                    this.startTimer(true);
                }
            })
        },
        stopTracker(){
            axios.post(this.route('task.timer.stop'), { duration: this.counter.seconds, id: this.counter.timer.id, task_id: this.task.id }).then((response) => {
                if(response.data){
                    this.stopTimer();
                    this.counter.duration = response.data;
                }
            })
        },
        stopTimer(){
            clearInterval(this.counter.ticker)
            this.activeTimerString = ''
            this.eTimer(this.counter, true)
        },
        totalTime(){
            if(this.activeTimerString){
                return this.activeTimerString;
            }else if(this.counter.duration){
                // return this.moment.duration(this.counter.duration, 'seconds').format('h[h] m[m] s[s]');
                return this.moment.utc(moment.duration(this.counter.duration,'seconds').as('milliseconds')).format('H[h] m[m] s[s]');
            }
            return '0:00:00'
        },
        calculateTimeSpent(timer){
            if (timer.stopped_at) {
                const started = this.moment(timer.started_at)
                const stopped = this.moment(timer.stopped_at)
                return this.moment.duration(stopped.diff(started)).format();
            }
            return ''
        },
        async moveTask(){
            const project_id = this.move_object.project_id;
            const taskObject = { previous_list: this.task.list_id, new_list: this.move_object.list_id, from: this.task.order, to: this.move_object.order, task_id: this.task.id };
            if(taskObject.previous_list !== taskObject.new_list){
                taskObject.is_move = true;
                await this.saveTask({ list_id: taskObject.new_list })
            }
            if(this.task.project_id !== project_id){
                await this.saveTask({ project_id })
            }
            await this.saveList(project_id, taskObject);
            Object.assign(this.task, { project_id, order: taskObject.to, list_id: taskObject.new_list });
            this.task.project = this.getSelectedProject()
            this.task.list = this.getSelectedList()
            this.showMoveCard = false;
            this.is_move = false;
        },
        saveList(project_id, taskObject){
            axios.post(this.route('task.update.list', project_id),taskObject).catch((error) => {
                console.log(error)
            })
        },
        getSelectedList(){
            let listItem =  this.list_items.filter(l=> {
                return l.id === this.move_object.list_id && l.project_id === this.move_object.project_id
            });
            if(!listItem.length){
                listItem = this.list_items.filter(l=> l.project_id === this.move_object.project_id)
                this.move_object.list_id = listItem[0].id
            }
            return listItem[0];
        },
        getSelectedProjectLists(){
            return this.list_items.filter(l=>l.project_id === this.move_object.project_id);
        },
        getSelectedListPostions(){
            return this.getSelectedList().id === this.task.list_id ? parseInt(this.getSelectedList().tasks_count, 10) : parseInt(this.getSelectedList().tasks_count, 10) + 1;
        },
        getSelectedProject(){
            return this.projects.filter(p=>p.id === this.move_object.project_id)[0];
        },
        displayMoveCard(){
            this.move_object.project_id = this.task.project.id;
            this.move_object.list_id = this.task.list.id;
            this.move_object.order = this.task.order;
            this.showMoveCard = true;
        },
        searchLabel(input){
            return this.labels.filter(lab => lab.name.toLowerCase().indexOf(input) > -1);
        },
        searchUser(input){
            return this.team_members.filter(tm => tm.user.name.toLowerCase().indexOf(input) > -1);
        },
        deleteLabel(id){
            axios.post(this.route('labels.delete', id)).catch((error) => {
                console.log(error)
            })
            const findIndex = this.labels.findIndex(l=>l.id === id);
            this.labels.splice(findIndex, 1);
            const tlIndex = this.task.task_labels.findIndex(tl=>tl.label_id === id);
            if(tlIndex > -1){
                this.task.task_labels.splice(tlIndex, 1);
            }
            this.label = {};
        },
        saveLabel(labelObject){
            labelObject.project_id = this.task.project_id;
            axios.post(this.route('labels.save'), labelObject).then((response) => {
                if(response.data && !labelObject.id){
                    this.labels.push(response.data);
                }else if(labelObject.id){
                    const findIndex = this.labels.findIndex(l=>l.id === labelObject.id);
                    const tlIndex = this.task.task_labels.findIndex(tl=>tl.label_id === labelObject.id);
                    this.labels[findIndex] = labelObject;
                    if(tlIndex > -1){
                        this.task.task_labels[tlIndex]['label'] = labelObject;
                    }
                }
                this.showEditLabelBox = false;
                this.showLabelBox = true;
            }).catch((error) => {
                console.log(error)
            })
            this.label = {};
        },
        addLabelToTask(checked, id){
            axios.post(this.route('task.labels.add'), {task_id: this.task.id, label_id: id}).then((response) => {
                if(response.data){
                    if(checked){
                        this.task.task_labels.push(response.data);
                    }else{
                        const findIndex = this.task.task_labels.findIndex(tl=>tl.label_id === id);
                        if(findIndex > -1){
                            this.task.task_labels.splice(findIndex, 1);
                        }
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        assignUserToTask(checked, id){
            axios.post(this.route('task.assignees.add'), {task_id: this.task.id, user_id: id}).then((response) => {
                if(response.data){
                    if(checked && response.data.assignee){
                        this.task.assignees.push(response.data.assignee);
                    }else{
                        const findIndex = this.task.assignees.findIndex(a => Number(a.user_id) === Number(id));
                        if(findIndex > -1){
                            this.task.assignees.splice(findIndex, 1);
                        }
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        task_label_ids(){
            return this.task.task_labels.map(item => item.label_id);
        },
        task_assignees(){
            return this.task.assignees.map(item => Number(item.user_id));
        },
        saveDetails(){
            if(this.task.description){
                const desc = this.task.description;
                this.editDescription = false;
                this.saveTask({ description: desc });
            }
        },
        async deleteTask(){
            await axios.post(this.route('task.delete', this.task.id), {});
            this.goToLink(this.route(this.view === 'table'?'projects.view.table':'projects.view.board', this.task.project_id));
        },
        async toggleGoogleCalendar() {
            this.googleSyncing = true
            try {
                if (this.task.google_event_id) {
                    await axios.delete(this.route('google.calendar.tasks.unsync', this.task.id))
                    this.task.google_event_id = null
                } else {
                    const res = await axios.post(this.route('google.calendar.tasks.sync', this.task.id))
                    this.task.google_event_id = res.data.google_event_id
                }
            } catch (e) {
                console.error('Google Calendar sync failed', e?.response?.data?.error || e.message)
            } finally {
                this.googleSyncing = false
            }
        },
        saveTask(taskObject){
            axios.post(this.route('task.update', this.task.id), taskObject).then((response) => {
                if(response.data){
                    // this.sendNotification('send.mail.task_update', response.data.id)
                }
            })
        },
        checklistDoneCount(checkList){
            return checkList.filter(item => !!item.is_done).length;
        },
        modifyCheck(check_list){
            check_list.modify = true;
            setTimeout(()=> {
                document.getElementById('modify_'+check_list.id).focus()
            }, 10)
        },
        deleteCheckList(id, index, checkLists){
            axios.post(this.route('check_list.delete', id)).catch((error) => {
                console.log(error)
            })
            checkLists.splice(index, 1);
        },
        deleteComment(id, comments, activity_id){
            axios.post(this.route('comment.delete', id)).then((response) => {
                if(response.data){
                    comments.unshift(response.data)
                    const findIndex = this.task.activities.findIndex(activity => activity.id === activity_id);
                    if (findIndex !== -1) {
                        this.task.activities.splice(findIndex, 1);
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        modifyCheckListSubmit(check_list, c_index, checklist){
            if(!check_list.title){
                this.deleteCheckList(check_list.id, c_index, checklist)
            }else{
                this.saveCheckList(check_list.id, {title: check_list.title});
            }
            check_list.modify = false
        },
        inputNewChecklistAction(check_list, e){
            if((e && e.keyCode === 13) || !e){
                if(!check_list.title){
                    this.newCheckList = false;
                }else{
                    this.saveNewCheckList({title: check_list.title, task_id: this.task.id}, this.task.checklists);
                    this.openNewChecklist()
                }
            }
        },
        saveCheckList(id, checkListObject){
            axios.post(this.route('check_list.update', id), checkListObject).catch((error) => {
                console.log(error)
            })
        },
        saveComment(id, commentObject){
            commentObject.updated_at = this.moment().format('YYYY-MM-DD HH:mm:ss');
            axios.post(this.route('comment.update', id), { details: commentObject.details, updated_at: commentObject.updated_at }).catch((error) => {
                console.log(error)
            })
        },
        saveNewCheckList(checkListObject, currentCheckList){
            this.new_chek_list.title = '';
            axios.post(this.route('check_list.new'), checkListObject).then((response) => {
                if(response.data){
                    currentCheckList.push(response.data);
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        saveNewComment(commentObject, currentComments){
            this.new_comment.details = '';
            commentObject.created_at = this.moment().format('YYYY-MM-DD HH:mm:ss')
            axios.post(this.route('comments.new'), commentObject).then((response) => {
                if(response.data){
                    this.showCommentBox = false;
                    // this.sendNotification('send.mail.comment', response.data.comment_id)
                    currentComments.unshift(response.data)
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        sendNotification(uri, id, user_id){
            const data = {id}
            if(!!user_id){
                data.user_id = user_id;
            }
            axios.post(this.route(uri, data)).catch((error) => {
                console.log(error);
            })
        },
        async getTask(id){
            try {
                const taskResponse = await axios.get(this.route('json.task.get', id));

                if (taskResponse.data && Object.keys(taskResponse.data).length) {
                    this.task = taskResponse.data;
                    this.counter.timer = this.task.timer || null;

                    if (this.counter.timer?.task_id === this.task?.id) {
                        this.startTimer();
                    }

                    await this.getOtherData();
                } else {
                    alert('Something went wrong');
                }
            } catch (error) {
                console.error('Error fetching task:', error);
                alert('Failed to fetch task data');
            } finally {
                this.loading = false;
            }
        },
        saveTitle(e){
            if (e.keyCode === 13 || e.type === 'blur'){
                e.preventDefault();
                e.target.blur();
                if (e.target.innerText){
                    const title = e.target.innerText;
                    axios.post(this.route('task.update', this.task.id),{ title }).then((response) => {
                        if(response.data){
                            // this.sendNotification('send.mail.task_update', response.data.id)
                        }
                    })
                }
            }
        },
        async getOtherData(){
            const dataResponse = await axios.get(this.route('task.other.data', {task_id: this.task.id, project_id: this.task.project_id}));
            const res = dataResponse.data;
            this.labels = res.labels || [];
            this.list_items = res.lists || [];
            this.projects = res.projects || [];
            this.team_members = res.team_members || [];
            this.existing_timer = res.timer || null;
            this.counter.duration = res.duration || 0;
            this.move_object.order = this.task.order;

            // Load available users after data is loaded
            this.loadAvailableUsers();

            setTimeout(async ()=>{
                if(this.task.cover && this.$refs.t__cover){
                    this.$refs.t__cover.style.backgroundColor = await this.get_average_rgb(this.task.cover.path)
                }
            })

        },

        // Custom Editor Methods
        loadAvailableUsers() {
            this.availableUsers = [];

            // Try different sources for users
            if (this.task && this.task.project && this.task.project.team_members) {
                this.availableUsers = this.task.project.team_members.map(member => ({
                    id: member.user.id,
                    name: member.user.name,
                    email: member.user.email,
                    avatar: member.user.avatar || member.user.photo_path
                }));
            } else if (this.team_members && this.team_members.length > 0) {
                this.availableUsers = this.team_members.map(member => ({
                    id: member.user ? member.user.id : member.id,
                    name: member.user ? member.user.name : member.name,
                    email: member.user ? member.user.email : member.email,
                    avatar: member.user ? (member.user.avatar || member.user.photo_path) : member.avatar
                }));
            } else if (this.task && this.task.assignees && this.task.assignees.length > 0) {
                this.availableUsers = this.task.assignees.map(assignee => ({
                    id: assignee.user.id,
                    name: assignee.user.name,
                    email: assignee.user.email,
                    avatar: assignee.user.avatar || assignee.user.photo_path
                }));
            } else if (this.$page.props.auth.user) {
                this.availableUsers = [{
                    id: this.$page.props.auth.user.id,
                    name: this.$page.props.auth.user.name,
                    email: this.$page.props.auth.user.email,
                    avatar: this.$page.props.auth.user.avatar || this.$page.props.auth.user.photo_path
                }];
            }
        },

        onMention(user) {
            // Handle mention event - you can add custom logic here
            this.$emit('mention', user);
        },

        onEditorReady(editor) {
            // Legacy method for compatibility - no longer needed with custom editor
            console.log('Editor ready (legacy method)');
        },
    },
    created() {
        this.moment = moment
        this.getTask(this.id)
    },
    mounted() {
        let self = this;
        window.addEventListener('keyup', function(ev) {
            if(ev.key === "Escape"){
                if(self.isPopup){
                    self.$emit('closeModal', true)
                }else{
                    self.goToLink(self.route(self.view === 'table'?'projects.view.table':'projects.view.board', task.project.slug || task.project.id))
                }
            }
        });
    },
    beforeUnmount() {
        // Clean up timeout when component is destroyed
        if (this.mentionTimeout) {
            clearTimeout(this.mentionTimeout);
            this.mentionTimeout = null;
        }
    },
    name: "task-details"
};
</script>

<style scoped>
/* Mention Popup Styles */
.mention-popup {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    width: 280px;
    max-width: 90vw;
    overflow: hidden;
    animation: slideUp 0.2s ease-out;
}

.dark .mention-popup {
    background: #1f2937;
    border: 1px solid #374151;
}

.mention-popup__header {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #f1f5f9;
    background: #f8fafc;
}

.dark .mention-popup__header {
    border-bottom: 1px solid #374151;
    background: #111827;
}

.mention-popup__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 12px;
    flex-shrink: 0;
}

.mention-popup__avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.mention-popup__avatar-placeholder {
    width: 100%;
    height: 100%;
    background: #3b82f6;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
}

.mention-popup__info {
    flex: 1;
    min-width: 0;
}

.mention-popup__name {
    font-weight: 600;
    color: #1e293b;
    font-size: 14px;
    margin-bottom: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.dark .mention-popup__name {
    color: #f3f4f6;
}

.mention-popup__email {
    color: #64748b;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.dark .mention-popup__email {
    color: #9ca3af;
}

.mention-popup__close {
    background: none;
    border: none;
    color: #64748b;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: all 0.2s ease;
    flex-shrink: 0;
}

.dark .mention-popup__close {
    color: #9ca3af;
}

.mention-popup__close:hover {
    background: #e2e8f0;
    color: #374151;
}

.dark .mention-popup__close:hover {
    background: #374151;
    color: #f3f4f6;
}

.mention-popup__content {
    padding: 12px 16px;
}

.mention-popup__details {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.mention-popup__detail-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #64748b;
    font-size: 12px;
}

.dark .mention-popup__detail-item {
    color: #9ca3af;
}

.mention-popup__detail-item svg {
    color: #94a3b8;
    flex-shrink: 0;
}

.dark .mention-popup__detail-item svg {
    color: #6b7280;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Mention styles for task description */
.prose .mention {
    background: #dbeafe;
    color: #1d4ed8;
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.dark .prose .mention {
    background: #1e3a8a;
    color: #93c5fd;
}

.prose .mention:hover {
    background: #bfdbfe;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dark .prose .mention:hover {
    background: #1e40af;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Enhanced Date/Time Picker positioning in modal */
.custom-date-picker,
.custom-datetime-picker,
.custom-time-picker {
    position: relative;
    z-index: 1;
}

.custom-date-picker .calendar-dropdown,
.custom-datetime-picker .datetime-picker-dropdown,
.custom-time-picker .time-picker-dropdown {
    position: fixed !important;
    z-index: 10000 !important;
    max-height: 400px;
    overflow-y: auto;
}

/* Ensure proper positioning within modal */
.custom-date-picker .calendar-dropdown {
    min-width: 280px;
    max-width: 320px;
}

.custom-datetime-picker .datetime-picker-dropdown {
    min-width: 400px;
    max-width: 450px;
}

.custom-time-picker .time-picker-dropdown {
    min-width: 320px;
    max-width: 360px;
}
</style>
