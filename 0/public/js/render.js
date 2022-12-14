/**
 * @file render.js
 * @author huanghuiquan
 */

define(function (require) {
    'use strict';

    return function (data) {
        let html = data.map(function (subject) {
            return `
            <li>
                <img src="${subject.url}"/>
                <p>${subject.title}</p>
            </li>
            `;
        }).join('');
        return html;
    };
});
