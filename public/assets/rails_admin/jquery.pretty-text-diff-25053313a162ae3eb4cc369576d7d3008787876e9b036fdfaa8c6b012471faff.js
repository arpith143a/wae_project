(function(){var e;e=jQuery,e.fn.extend({prettyTextDiff:function(t){var n,i;return i={originalContainer:".original",changedContainer:".changed",diffContainer:".diff",cleanup:!0,debug:!1},i=e.extend(i,t),e.fn.prettyTextDiff.debug("Options: ",i,i),n=new diff_match_patch,this.each(function(){var t,f,r,a;return a=e(i.originalContainer,this).text(),e.fn.prettyTextDiff.debug("Original text found: ",a,i),t=e(i.changedContainer,this).text(),e.fn.prettyTextDiff.debug("Changed  text found: ",t,i),r=n.diff_main(a,t),i.cleanup&&n.diff_cleanupSemantic(r),e.fn.prettyTextDiff.debug("Diffs: ",r,i),f=e.map(r,function(t){return e.fn.prettyTextDiff.createHTML(t)}),e(i.diffContainer,this).html(f.join("")),this})}}),e.fn.prettyTextDiff.debug=function(e,t,n){if(n.debug)return console.log(e,t)},e.fn.prettyTextDiff.createHTML=function(e){var t,n,i,f,r,a,c;switch([],i=/&/g,r=/</g,f=/>/g,a=/\n/g,n=e[0],t=e[1],c=t.replace(i,"&amp;").replace(r,"&lt;").replace(f,"&gt;").replace(a,"<br>"),n){case DIFF_INSERT:return"<ins>"+c+"</ins>";case DIFF_DELETE:return"<del>"+c+"</del>";case DIFF_EQUAL:return"<span>"+c+"</span>"}}}).call(this);