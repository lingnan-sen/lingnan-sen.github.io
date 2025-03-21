/*--------loader script-----------*/
$(function () {
    if (typeof isset !== 'function') {
        var isset = (obj) => {
            if(typeof obj==='undefined' || obj=='undefined' || obj===null || obj==='null') return false;
            else return true;
        };
    }

    var loading = $('#loadbar').hide();
    $(document).ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
        loading.hide();
    });
    var questionNo = 0;
    var correctCount = 0;
    var check_click = 0;
    var q = [
        {'Q': 'Which is National game of India?', 'A': 2, 'C': ['Cricket;', 'Hockey;', 'Football', 'Kabaddi']},
        {'Q': 'Who was first individual Olympic medal winner from independent India?', 'A': 3, 'C': ['Pradip Bode', 'Harihar Banerjee', 'KD Jadav', 'Milkha Singh']},
        {'Q': 'In which stadium Sachin Tendulkar completed his 100th century?', 'A': 1, 'C': ['Shere Bangla stadium', 'Eden Garden', 'Firoz shah Kotla Stadium', 'None of the above']},
        {'Q': 'Who is the first Indian woman to win as Asian Games gold in 4oom run?', 'A': 2, 'C': ['M.L. Valsamma', 'Kamaljit Sandhu', 'PT Usha', 'K Malleshwari']},
        {'Q': 'Who was indian first football caption?', 'A': 3, 'C': ['P K Banerjee', 'Shailen Manna', 'Talimeren Ao', 'SC Goswami']}

    ];
	//Progress Bar
	var progress, progressPercentage; // progress bar

    var currentStep = 1;
    var currentQuestionnaire = 0;
    var questionAnswer = {};
    var problemIndex = "";
    var totalSteps = 43;
    var currentHistory = [];

    //init
    $('.btn-prev-step').hide();
    $('.btn-next-step').attr('ahref', $('.btn-next-step').attr('href'));
    $('.btn-next-step').removeAttr('href');
    $('.desc').hide();

    let html = '';
    let i = 0;
    for(let j in issues){
        html += '\
            <li class="animated wow fadeInUp delay-0-1s">\
                <a href="#">\
                    <input type="radio" id="'+(String.fromCharCode(i+97))+'-option" name="selector" value="'+(++i)+'">\
                    <label for="a-option" class="element-animation">\
                        <font lang="en">'+issues[j]['title_en']+'</font>\
                        <font lang="zh">'+issues[j]['title_zh']+'</font>\
                        <font lang="cn">'+issues[j]['title_cn']+'</font>\
                    </label>\
                    <div class="check"></div>\
                </a>\
            </li>\
        ';
    }
    $("#quiz .row").html(html);

    window.onbeforeunload = function(e){
        if(currentStep<3){
            return 'Changes that you made may not be saved.';
        }
    };
    window.addEventListener('popstate', function (event) {
        if(currentHistory.length==0 || currentStep==1 || currentStep==3){
            currentHistory = [];
            window.location.href = './index.html';
        }else{
            let lastEntry = currentHistory.pop();
            history.pushState(null, '', '');
            prevStep();
        }
    });


    progress = document.getElementsByClassName('progress-bar')[0];
    function updateProgress() {
        if(currentStep==1){
            currentHistory = [];
        }
        let count = currentStep;
        if(currentStep>=2){
            for(let j in questionAnswer['2']){
                count += Object.keys(questionAnswer['2'][j]).length;
            }
        }
        console.log("count="+count);
        progressPercentage = Math.round((count / totalSteps) * 100);
        progress.style.width = progressPercentage + '%';
    }
    $(document.body).on('click', "label.element-animation", function (e) {
        if(currentStep==1 || currentStep==1.5){
            answerQuestion1($(this));
        }
        console.log("questionAnswer="+JSON.stringify(questionAnswer));
    });
    $(document.body).on('click', ".btn-next-step-actived", function (e) {
        nextStep();
    });
    $(document.body).on('click', ".btn-prev-step",function(e){
        prevStep();
    });
    $(document.body).on('click', ".btn-yesno", function (e) {
        let qid = $(this).attr('ref');

        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
            delete questionAnswer[currentStep][currentQuestionnaire][qid]
        }else{
            $(this).closest('tr').find('.btn-yesno').removeClass("selected");
            $(this).addClass("selected");

            if(!isset(questionAnswer[currentStep])){
                questionAnswer[currentStep] = {};
            }
            if(!isset(questionAnswer[currentStep][currentQuestionnaire])){
                questionAnswer[currentStep][currentQuestionnaire] = {};
            }
            questionAnswer[currentStep][currentQuestionnaire][qid] = $(this).attr('reftext');
        }

        if(Object.keys(questionAnswer[currentStep][currentQuestionnaire]).length>=8){
            $('.btn-next-step').attr('href', $('.btn-next-step').attr('ahref'));
            $('.btn-next-step').removeAttr('ahref');
            $('.btn-next-step').addClass('btn-next-step-actived');
        }else{
            if(Object.keys(questionAnswer[currentStep][currentQuestionnaire]).length==0){
                delete questionAnswer[currentStep][currentQuestionnaire];
            }
            $('.btn-next-step').attr('ahref', $('.btn-next-step').attr('href'));
            $('.btn-next-step').removeAttr('href');
            $('.btn-next-step').removeClass('btn-next-step-actived');
        }

        console.log("questionAnswer="+JSON.stringify(questionAnswer));
        // console.log("length="+Object.keys(questionAnswer[currentStep][currentQuestionnaire]).length);

        updateProgress();
    });
    var answerQuestion1 = (obj) => {
        if(obj.parent().find('input').val()=='2' || obj.parent().find('input').val()=='3'){
            $('.quiz-'+obj.parent().find('input').val()).show();
        }else{
            if(obj.hasClass('selected')){
                obj.removeClass('selected');
                delete questionAnswer[currentStep][obj.parent().find('input').val()];

                if(Object.keys(questionAnswer[currentStep]).length==0){
                    delete questionAnswer[currentStep];
                    $('.btn-next-step').attr('ahref', $('.btn-next-step').attr('href'));
                    $('.btn-next-step').removeAttr('href');
                    $('.btn-next-step').removeClass('btn-next-step-actived');
                }
            }else{
                obj.addClass('selected');
                if(!isset(questionAnswer[currentStep])) questionAnswer[currentStep] = {};
                questionAnswer[currentStep][obj.parent().find('input').val()] = true;
                $('.btn-next-step').attr('href', $('.btn-next-step').attr('ahref'));
                $('.btn-next-step').removeAttr('ahref');
                $('.btn-next-step').addClass('btn-next-step-actived');
            }
            let check2 = false,
                check3 = false;
            for(let j in questionAnswer[currentStep]){
                if(j*1>20 && j*1<=24){
                    check2 = true;
                }
                if(j*1>30 && j*1<=34){
                    check3 = true;
                }
            }
            if(check2){
                $('#b-option').next().addClass('selected');
            }else{
                $('#b-option').next().removeClass('selected');
            }
            if(check3){
                $('#c-option').next().addClass('selected');
            }else{
                $('#c-option').next().removeClass('selected');
            }
        }
    };
    var prevStep = () => {
        console.log("prevStep");
        setTimeout(()=>{
            console.log("currentStep="+currentStep);

            if(currentQuestionnaire<=1){
                delete questionAnswer[currentStep];

                if(currentStep==2){
                    currentQuestionnaire=0;
                    totalSteps = 43;
                }

                if(currentStep==1.5 || (currentStep==2 && questionAnswer["1"]!=2 && questionAnswer["1"]!=3)){
                    $('#loadbar').show();
                    $('#quiz').hide();
                    $('.question').hide();
                    $('.desc').hide();
    
                    currentStep=1;
    
                    $('.question h3.step-info *[lang="en"]').html('Step 1: Describe the problem');
                    $('.question h3.step-info *[lang="zh"]').html('步驟一：描述問題');
                    $('.question h3.step-info *[lang="cn"]').html('步骤一：描述问题');


                    let checked = {};
                    for(let j in questionAnswer[currentStep]){
                        if(j*1>20 && j*1<=24){
                            checked[2] = true;
                        }
                        if(j*1>30 && j*1<=34){
                            checked[3] = true;
                        }
                    }
                    let html = '';
                    let i = 0;
                    for(let j in issues){
                        html += '\
                            <li class="animated wow fadeInUp delay-0-1s">\
                                <a href="#">\
                                    <input type="radio" id="'+(String.fromCharCode(i+97))+'-option" name="selector" value="'+(++i)+'">\
                                    <label for="a-option" class="element-animation '+((isset(questionAnswer[currentStep][i]) || isset(checked[i])) ? ' selected' : '')+'">\
                                        <font lang="en">'+issues[j]['title_en']+'</font>\
                                        <font lang="zh">'+issues[j]['title_zh']+'</font>\
                                        <font lang="cn">'+issues[j]['title_cn']+'</font>\
                                    </label>\
                                    <div class="check"></div>\
                                </a>\
                            </li>\
                        ';
                    }
                    $("#quiz .row").html(html);
    
                    setTimeout(function () {
                        $('#quiz').show();
                        $('.question').show();
                        $('#loadbar').hide();
                    }, 500);
                }else if(currentStep==2 && (questionAnswer["1"]==2 || questionAnswer["1"]==3)){
                    $('#loadbar').show();
                    $('#quiz').hide();
                    $('.question').hide();
                    $('.desc').hide();
    
                    currentStep = 1.5;
    
                    $('.element-animation').removeClass('selected').closest('li').hide();
                    setTimeout(function () {
                        $('#quiz').show();
                        $('.question').show();
                        $('#loadbar').hide();
                    }, 500);
    
                    if(questionAnswer["1"]==2){
                        $('.question h3.step-info *[lang="en"]').html('What’s the main problem of his/her work?');
                        $('.question h3.step-info *[lang="zh"]').html('他/她的課業問題主要是甚麼？');
                        $('.question h3.step-info *[lang="cn"]').html('他/她的课业问题主要是什么？');

                        $($('#a-option').parent().find('label').find('*[lang=en]')).html('Lack of organisation');
                        $($('#a-option').parent().find('label').find('*[lang=zh]')).html('課業內容欠缺組織');
                        $($('#a-option').parent().find('label').find('*[lang=cn]')).html('课业内容欠缺组织').closest('li').show();
                        $($('#b-option').parent().find('label').find('*[lang=en]')).html('Poor language');
                        $($('#b-option').parent().find('label').find('*[lang=zh]')).html('語文欠佳');
                        $($('#b-option').parent().find('label').find('*[lang=cn]')).html('语文欠佳').closest('li').show();
                        $($('#c-option').parent().find('label').find('*[lang=en]')).html('Lack of understanding of requirement/subject matters');
                        $($('#c-option').parent().find('label').find('*[lang=zh]')).html('對課業要求或科目內容缺乏理解');
                        $($('#c-option').parent().find('label').find('*[lang=cn]')).html('对课业要求或科目内容缺乏理解').closest('li').show();
                        $($('#d-option').parent().find('label').find('*[lang=en]')).html('Insufficient content');
                        $($('#d-option').parent().find('label').find('*[lang=zh]')).html('內容或字數不足');
                        $($('#d-option').parent().find('label').find('*[lang=cn]')).html('内容或字数不足').closest('li').show();

                        if(questionAnswer[currentStep]=="1")
                            $($('#a-option').parent().find('label')).addClass("selected");
                        else if(questionAnswer[currentStep]=="2")
                            $($('#b-option').parent().find('label')).addClass("selected");
                        else if(questionAnswer[currentStep]=="3")
                            $($('#c-option').parent().find('label')).addClass("selected");
                        else if(questionAnswer[currentStep]=="4")
                            $($('#d-option').parent().find('label')).addClass("selected");
                    }else if(questionAnswer["1"]==3){
                        $('.question h3.step-info *[lang="en"]').html('What’s the main cause of his/her failure?');
                        $('.question h3.step-info *[lang="zh"]').html('他/她失敗的主要問題在哪？');
                        $('.question h3.step-info *[lang="cn"]').html('他/她失败的主要问题在哪？');

                        $($('#a-option').parent().find('label').find('*[lang=en]')).html('Seem not prepared');
                        $($('#a-option').parent().find('label').find('*[lang=zh]')).html('看來沒有為測考作準備');
                        $($('#a-option').parent().find('label').find('*[lang=cn]')).html('看来没有为测考作准备').closest('li').show();
                        $($('#b-option').parent().find('label').find('*[lang=en]')).html('Lack of understanding of question/subject matters');
                        $($('#b-option').parent().find('label').find('*[lang=zh]')).html('對試卷問題或科目內容缺乏理解');
                        $($('#b-option').parent().find('label').find('*[lang=cn]')).html('对试卷问题或科目内容缺乏理解').closest('li').show();
                        $($('#c-option').parent().find('label').find('*[lang=en]')).html('Test results not reflecting his/her performance in class or assignment');
                        $($('#c-option').parent().find('label').find('*[lang=zh]')).html('測考表現似乎未能反映他/她在課堂或課業上的正常表現');
                        $($('#c-option').parent().find('label').find('*[lang=cn]')).html('测考表现似乎未能反映他/她在课堂或课业上的正常表现').closest('li').show();
                        $($('#d-option').parent().find('label').find('*[lang=en]')).html('Fail to work with group project');
                        $($('#d-option').parent().find('label').find('*[lang=zh]')).html('他/她能否順利參與小組課業？');
                        $($('#d-option').parent().find('label').find('*[lang=cn]')).html('他/她能否顺利参与小组课业？').closest('li').show();
                        
                        if(questionAnswer[currentStep]=="1")
                            $($('#a-option').parent().find('label')).addClass("selected");
                        else if(questionAnswer[currentStep]=="2")
                            $($('#b-option').parent().find('label')).addClass("selected");
                        else if(questionAnswer[currentStep]=="3")
                            $($('#c-option').parent().find('label')).addClass("selected");
                        else if(questionAnswer[currentStep]=="4")
                            $($('#d-option').parent().find('label')).addClass("selected");
                    }
                }
            }else{
                currentQuestionnaire--;
                $('.questions-table-wrapper').hide();
                $('.questions-table-wrapper-'+(currentQuestionnaire-1)).show();
            }


            $('.btn-next-step').attr('href', $('.btn-next-step').attr('ahref'));
            $('.btn-next-step').removeAttr('ahref');
            $('.btn-next-step').addClass('btn-next-step-actived');
            if(currentStep==1){
                $('.btn-prev-step').hide();
            }
            updateProgress();
        },100);
    };
    var nextStep = () => {
        console.log("nextStep");

        setTimeout(()=>{
            $('.btn-next-step').attr('ahref', $('.btn-next-step').attr('href'));
            $('.btn-next-step').removeAttr('href');
            $('.btn-next-step').removeClass('btn-next-step-actived');

            if(currentStep==1){
                $('#loadbar').show();
                $('#quiz').hide();
                $('.question').hide();
                $('.desc').hide();
                currentStep += 0.5;
                nextStep();
            }else if(currentStep==1.5){
                $('#loadbar').show();
                $('#quiz').hide();
                $('.question').hide();
                $('.desc').hide();

                $('#quiz input:radio').prop('checked', false);
                $('#quiz .element-animation').removeClass('selected').closest('li').hide();
                setTimeout(function () {
                    $("#quiz").show();
                    $('.question').show();
                    $('#loadbar').hide();
                }, 500);

                $('.question h3.step-info *[lang="en"]').html('Step 2: Identify possible reasons for the problem');
                $('.question h3.step-info *[lang="zh"]').html('步驟二：辨識有可能的背後原因');
                $('.question h3.step-info *[lang="cn"]').html('步骤二：辨识有可能的背后原因');
                let desc = '';

                desc += '<p>\
                    <font lang="en">\
                        You suggest that your student <b>'+getProblemTitles('en')+'</b>\
                    </font>\
                    <font lang="zh">\
                        你指出你的學生<b>'+getProblemTitles('zh')+'</b>\
                    </font>\
                    <font lang="cn">\
                        你指出你的学生<b>'+getProblemTitles('cn')+'</b>\
                    </font>\
                </p>';
                desc += '<p>\
                    <font lang="en">\
                        Next, let’s Identify possible reasons for the problem you have selected. \
                        Please complete the following checklist(s) according to your best understanding of the student. \
                        Tick Yes/No to represent whether your student has the following problems:\
                    </font>\
                    <font lang="zh">\
                        下一步，讓我們辨識你所選擇的問題有可能的背後原因。 \
                        請按你對學生的了解，完成以下各份量表。 \
                        請在是否的空格上打上剔號以表示你的學生是否有下面的問題：\
                    </font>\
                    <font lang="cn">\
                        下一步，让我们辨识你所选择的问题有可能的背后原因。 \
                        请按你对学生的了解，完成以下各份量表。 \
                        请在是否的空格上打上剔号以表示你的学生是否有下面的问题：\
                    </font>\
                </p>';

                let qns = getQns();
                totalSteps = totalSteps - 40 + qns.length*8;
                let i = 0;
                for(let qn in qns){
                    desc += '<div class="questions-table-wrapper animated wow '+(i++ == 0 ? 'fadeInUp' : 'fadeInRight')+' questions-table-wrapper-'+qn+'">';
                    desc += '<p><b><font lang="en">'+questionnaire[qns[qn]]['title_en']+'</font><font lang="zh">'+questionnaire[qns[qn]]['title_zh']+'</font><font lang="cn">'+questionnaire[qns[qn]]['title_cn']+'</font></b></p>';
                    desc += '<table class="questions-table">';
                    for(let q in questionnaire[qns[qn]]['questions']){
                        desc += '<tr>\
                            <td style="text-align:left;font-size:18px;"><font lang="en">'+questionnaire[qns[qn]]['questions'][q]['en']+'</font><font lang="zh">'+questionnaire[qns[qn]]['questions'][q]['zh']+'</font><font lang="cn">'+questionnaire[qns[qn]]['questions'][q]['cn']+'</font></td>\
                            <td style="width:100px;"><a class="btn-yesno btn-yes" ref="'+q+'" reftext="YES" href="javascript:void(0);"><font lang="en">YES</font><font lang="zh">是</font><font lang="cn">是</font></a></td>\
                            <td style="width:100px;"><a class="btn-yesno btn-no" ref="'+q+'" reftext="NO" href="javascript:void(0);"><font lang="en">NO</font><font lang="zh">否</font><font lang="cn">否</font></a></td>\
                        </tr>';
                    }
                    desc += '</table>';
                    desc += '</div>';
                }

                $('.desc').html(desc).show();
                $('.questions-table-wrapper-'+currentQuestionnaire).show();

                currentQuestionnaire++;
                currentStep += 0.5;
            }else if(currentStep==2){
                let qns = getQns();
                if(totalSteps==43) totalSteps = totalSteps - 40 + qns.length*8;

                // totalQuestionnaires = qns.length;
                console.log("qns.length="+qns.length);

                if(currentQuestionnaire==qns.length){
                    $('#loadbar').show();
                    $('#quiz').hide();
                    $('.question').hide();
                    $('.desc').hide();

                    $('#quiz input:radio').prop('checked', false);
                    $('#quiz .element-animation').removeClass('selected').closest('li').hide();
                    setTimeout(function () {
                        $("#quiz").show();
                        $('.question').show();
                        $('#loadbar').hide();
                    }, 500);

                    $('.question h3.step-info *[lang="en"]').html('Step 3: Explore potential strategies');
                    $('.question h3.step-info *[lang="zh"]').html('步驟三：分析協助策略');
                    $('.question h3.step-info *[lang="cn"]').html('步骤三：分析协助策略');
                    let desc = '';
                    
                    
                    let count = 0;
                    for(let i in questionAnswer["1"]){
                        let index = 0;
                        if(i*1==21) index = "2a";
                        else if(i*1==22) index = "2b";
                        else if(i*1==23) index = "2c";
                        else if(i*1==24) index = "2d";
                        else if(i*1==31) index = "3a";
                        else if(i*1==32) index = "3b";
                        else if(i*1==33) index = "3c";
                        else if(i*1==34) index = "3d";
                        else index = i;

                        if(count>0){
                            desc += '<div class="page-break" style="page-break-before:always;height:0px;overflow:hidden;margin:0px;padding:0px;">&nbsp;</div>';
                        }
                        count++;

                        desc += '<h4>\
                            <font lang="en">\
                                ('+count+') You suggest that your student <b>'+getProblemTitleByIndex('en', index)+'</b>\
                            </font>\
                            <font lang="zh">\
                                ('+count+') 你指出你的學生<b>'+getProblemTitleByIndex('zh', index)+'</b>\
                            </font>\
                            <font lang="cn">\
                                ('+count+') 你指出你的学生<b>'+getProblemTitleByIndex('cn', index)+'</b>\
                            </font>\
                        </h4>';


                        desc += '<p>\
                            <font lang="en">\
                                Let’s see what the possible reasons for the problems are and the potential strategies to help your student.\
                            </font>\
                            <font lang="zh">\
                                讓我們看看有可能的問題背後理由和相對的可行協助策略。\
                            </font>\
                            <font lang="cn">\
                                让我们看看有可能的问题背后理由和相对的可行协助策略。\
                            </font>\
                        </p>';


                        desc += '<blockquote class="otro-blockquote">';
                        desc += '<p lang="en">'+problem[index]['intro_en'].split("\n").join('</p><p lang="en">')+'</p>';
                        desc += '<p lang="zh">'+problem[index]['intro_zh'].split("\n").join('</p><p lang="zh">')+'</p>';
                        desc += '<p lang="cn">'+problem[index]['intro_cn'].split("\n").join('</p><p lang="cn">')+'</p>';
                        desc += '</blockquote>';

                        desc += '<div class="page-break" style="page-break-before:always;height:0px;overflow:hidden;margin:0px;padding:0px;">&nbsp;</div>';
                        desc += '<p><h4 lang="en">The followings are the results of the checklists you have completed:</h4></p>';
                        desc += '<p><h4 lang="zh">以下是你已完成量表的分析結果：</h4></p>';
                        desc += '<p><h4 lang="cn">以下是你已完成量表的分析结果：</h4></p>';
                        let l = 1;

                        let subqns = getQnsByIndex(index);
                        console.log("subqns="+JSON.stringify(subqns));
                        for(let j in subqns){
                            let qid = -1;
                            for(let k in qns){
                                if(qns[k]*1==subqns[j]*1){
                                    qid = k;
                                    break;
                                }
                            }

                            if(qid<0) continue;
                            
                            console.log("qid="+qid);
                            console.log("qns[qid]="+qns[qid]);

                            let questionnaire_id = qns[qid];
                            desc += '<h5 lang="en">'+l+". "+questionnaire[questionnaire_id]['title_en']+'</h5>';
                            desc += '<p lang="en">'+questionnaire[questionnaire_id]['intro_en'].split("\n").join('</p><p lang="en">')+'</p>';
                            desc += '<h5 lang="zh">'+l+". "+questionnaire[questionnaire_id]['title_zh']+'</h5>';
                            desc += '<p lang="zh">'+questionnaire[questionnaire_id]['intro_zh'].split("\n").join('</p><p lang="zh">')+'</p>';
                            desc += '<h5 lang="cn">'+l+". "+questionnaire[questionnaire_id]['title_cn']+'</h5>';
                            desc += '<p lang="cn">'+questionnaire[questionnaire_id]['intro_cn'].split("\n").join('</p><p lang="cn">')+'</p>';

                            console.log("qns="+JSON.stringify(qns));
                            console.log("questionAnswer[currentStep]="+JSON.stringify(questionAnswer[currentStep]));
                            let yes_count = 0;
                            for(let m in questionAnswer[currentStep][(qid*1+1)]){
                                if(questionAnswer[currentStep][(qid*1+1)][m]=='YES'){
                                    yes_count++;
                                }
                            }

                            if(yes_count>=5){
                                desc += '<blockquote class="otro-blockquote-yellow">';
                                desc += '<p lang="en">According to your answers (<b>'+yes_count+' “Yes”</b> out of 8), your student displays his/her weaknesses of this area.</p>';
                                desc += '<p lang="zh">根據你的答案（8條中有'+yes_count+'個 “是”），你的學生似乎在這方面顯得有些困難。</p>';
                                desc += '<p lang="cn">根据你的答案（8条中有'+yes_count+'个 “是”），你的学生似乎在这方面显得有些困难。</p>';
                                desc += '<p><font lang="en">This suggests that your student may :</font><font lang="zh">這結果代表你的學生可能：</font><font lang="cn">这结果代表你的学生可能：</font>';
                                desc += '<ul lang="en">';

                                // console.log("problemIndex="+problemIndex);
                                // console.log("questionnaire_id="+questionnaire_id);
                                let temp = problem[index]['suggestion'][questionnaire_id+'_result_en'].split("\n");
                                for(let n in temp){
                                    desc += '<li>'+temp[n]+'</li>';
                                }
                                desc += '</ul>';
                                desc += '<ul lang="zh">';
                                temp = problem[index]['suggestion'][questionnaire_id+'_result_zh'].split("\n");
                                for(let n in temp){
                                    desc += '<li>'+temp[n]+'</li>';
                                }
                                desc += '</ul>';
                                desc += '<ul lang="cn">';
                                temp = problem[index]['suggestion'][questionnaire_id+'_result_cn'].split("\n");
                                for(let n in temp){
                                    desc += '<li>'+temp[n]+'</li>';
                                }
                                desc += '</ul>';
                                desc += '</p>';
                                desc += '<p><font lang="en">How to help your student?</font><font lang="zh">如何協助你的學生？</font><font lang="cn">如何协助你的学生？</font>';
                                desc += '<ul lang="en">';
                                temp = problem[index]['suggestion'][questionnaire_id+'_suggestion_en'].split("\n");
                                for(let n in temp){
                                    desc += '<li>'+temp[n]+'</li>';
                                }
                                desc += '</ul>';
                                desc += '<ul lang="zh">';
                                temp = problem[index]['suggestion'][questionnaire_id+'_suggestion_zh'].split("\n");
                                for(let n in temp){
                                    desc += '<li>'+temp[n]+'</li>';
                                }
                                desc += '</ul>';
                                desc += '<ul lang="cn">';
                                temp = problem[index]['suggestion'][questionnaire_id+'_suggestion_cn'].split("\n");
                                for(let n in temp){
                                    desc += '<li>'+temp[n]+'</li>';
                                }
                                desc += '</ul>';
                                desc += '</p>';
                                desc += '</blockquote>';
                            }else{
                                desc += '<blockquote class="otro-blockquote-blue">';
                                desc += '<p lang="en">According to your answers ('+yes_count+' “Yes” out of 8), your student does not display significant weakness in this area.</p>';
                                desc += '<p lang="zh">根據你的答案（8條中有'+yes_count+'個 “是”），你的學生似乎在這方面沒有顯著的問題。</p>';
                                desc += '<p lang="cn">根据你的答案（8条中有'+yes_count+'个 “是”），你的学生似乎在这方面没有显著的问题。</p>';
                                desc += '</blockquote>';
                            }
                            l++;
                            desc += '<hr class="no-print" /><br/>'
                            desc += '<div class="page-break" style="page-break-before:always;height:0px;overflow:hidden;margin:0px;padding:0px;">&nbsp;</div>';
                        }

                        //general suggestion
                        desc += '<p><h4 lang="en">General suggestions for teachers to support a student with issue about <b>"';
                        desc += getProblemTitleByIndex('en', index);
                        desc += '"</b></h4></p>';
                        desc += '<p><h4 lang="zh">對於協助有<b>"';
                        desc += getProblemTitleByIndex('zh', index);
                        desc += '"情況的學生先一般建議</b></h4></p>';
                        desc += '<p><h4 lang="cn">对于协助有<b>"';
                        desc += getProblemTitleByIndex('cn', index);
                        desc += '"情况的学生先一般建议</b></h4></p>';

                        desc += '<blockquote class="otro-blockquote">';
                        desc += '<p><font lang="en">How to help your student?</font><font lang="zh">如何協助你的學生？</font><font lang="cn">如何协助你的学生？</font>';
                        desc += '<ul lang="en">';
                        // desc += '<li>Share samples of assignment with good organisation and presentation.</li>';
                        // desc += '<li>Include the expected structure and organisation of the assignment in the information sheet of the given assignment.</li>';
                        // desc += '<li>Suggest or hint the related resources/reading materials for each part of the assignment.</li>';
                        // desc += '<li>Invite your student to verbally present his/her ideas and structure of his/her assignment before writing it out.</li>';
                        // desc += '<li>Mark all discussion between you and your student about the assignment on a paper such that he/she can refer to it later.</li>';
                        // desc += '<li>Some resources which may be useful for your students:';
                        // desc += '<ul lang="en">';
                        // desc += '<li><a href="https://writing.wisc.edu/handbook/process/" target="_blank" alt="this link will be opened on a new tag" title="this link will be opened on a new tag">https://writing.wisc.edu/handbook/process/</a></li>';
                        temp = problem[index]['suggestion']['General_suggestion_en'].split("\n");
                        for(let n in temp){
                            desc += '<li>'+temp[n]+'</li>';
                        }
                        desc += '</ul>';
                        desc += '</li>';
                        desc += '</ul>';
                        
                        desc += '<ul lang="zh">';
                        // desc += '<li>分享具有良好組織和演示的作業樣本。</li>';
                        // desc += '<li>在給定作業的信息表中包括作業的預期結構和組織。</li>';
                        // desc += '<li>建議或提示作業各部分的相關資源/閱讀材料。</li>';
                        // desc += '<li>請您的學生在寫作業之前口頭陳述他/她的想法和作業結構。</li>';
                        // desc += '<li>將您和您的學生之間關於作業的所有討論都標記在紙上，以便他/她以後可以參考。</li>';
                        // desc += '<li>一些可能對您的學生有用的資源：';
                        // desc += '<ul lang="zh">';
                        // desc += '<li><a href="https://writing.wisc.edu/handbook/process/" target="_blank" alt="this link will be opened on a new tag" title="this link will be opened on a new tag">https://writing.wisc.edu/handbook/process/</a></li>';
                        temp = problem[index]['suggestion']['General_suggestion_zh'].split("\n");
                        for(let n in temp){
                            desc += '<li>'+temp[n]+'</li>';
                        }
                        desc += '</ul>';
                        desc += '</li>';
                        desc += '</ul>';
                        
                        desc += '<ul lang="cn">';
                        // desc += '<li>分享具有良好组织和演示的作业样本。</li>';
                        // desc += '<li>在给定作业的信息表中包括作业的预期结构和组织。</li>';
                        // desc += '<li>建议或提示作业各部分的相关资源/阅读材料。</li>';
                        // desc += '<li>请您的学生在写作业之前口头陈述他/她的想法和作业结构。</li>';
                        // desc += '<li>将您和您的学生之间关于作业的所有讨论都标记在纸上，以便他/她以后可以参考。</li>';
                        // desc += '<li>一些可能对您的学生有用的资源：';
                        // desc += '<ul lang="cn">';
                        // desc += '<li><a href="https://writing.wisc.edu/handbook/process/" target="_blank" alt="this link will be opened on a new tag" title="this link will be opened on a new tag">https://writing.wisc.edu/handbook/process/</a></li>';
                        temp = problem[index]['suggestion']['General_suggestion_cn'].split("\n");
                        for(let n in temp){
                            desc += '<li>'+temp[n]+'</li>';
                        }
                        desc += '</ul>';
                        desc += '</li>';
                        desc += '</ul>';
                        desc += '</p>';
                        desc += '</blockquote>';
                    }

                    desc += '<p lang="en">If staff encounter situations that cannot be handled in class, please contact the Office of Student Affairs (OSA): Counselling Services (<a href="mailto:counsel@LN.edu.hk" alt="send mail to counsel@LN.edu.hk" title="send mail to counsel@LN.edu.hk">counsel@LN.edu.hk</a>) or Support Services for Students with SEN (<a href="mailto:sen@LN.edu.hk" alt="send mail to sen@LN.edu.hk" title="send mail to sen@LN.edu.hk">sen@LN.edu.hk</a>).</p>';
                    desc += '<p lang="zh">如果教職員遇到無法在課堂上處理的情況，請聯絡學生事務處 (OSA)：輔導服務 (<a href="mailto:counsel@LN.edu.hk" alt="發電郵給counsel@LN.edu.hk" title="發電郵給counsel@LN.edu.hk">counsel@LN.edu.hk</a>) 或特殊教育需要學生支援服務 (<a href="mailto:sen@LN.edu.hk" alt="發電郵給sen@LN.edu.hk" title="發電郵給sen@LN.edu.hk">sen@LN.edu.hk</a>)。</p>';
                    desc += '<p lang="cn">如果教职员遇到无法在课堂上处理的情况，请联络学生事务处 (OSA)：辅导服务 (<a href="mailto:counsel@LN.edu.hk" alt="发电邮给counsel@LN.edu.hk" title="发电邮给counsel@LN.edu.hk">counsel@LN.edu.hk</a>) 或特殊教育需要学生支援服务 (<a href="mailto:sen@LN.edu.hk" alt="发电邮给sen@LN.edu.hk" title="发电邮给sen@LN.edu.hk">sen@LN.edu.hk</a>)。</p>';


                    desc += '<hr class="no-print" /><br/>'
                    desc += '<div class="page-break" style="page-break-before:always;height:0px;overflow:hidden;margin:0px;padding:0px;">&nbsp;</div>';

                    desc += '<h4 lang="en">References:</h4>';
                    desc += '<h4 lang="zh">參考：</h4>';
                    desc += '<h4 lang="cn">参考：</h4>';
                    desc += '<p></p>';
                    desc += '<p lang="en">';
                    desc += 'Age UK. “Depression and anxiety” (<a href="https://www.ageuk.org.uk/information-advice/health-wellbeing/conditions-illnesses/depression-anxiety/" target="_blank" alt="This link will be opened at a new tab" title="This link will be opened at a new tab">https://www.ageuk.org.uk/information-advice/health-wellbeing/conditions-illnesses/depression-anxiety/</a>)<br /><br />';
                    desc += 'DO-IT, University of Washington. “Academic Accommodations for Students with Learning Disabilities” (<a href="https://www.washington.edu/doit/academic-accommodations-students-learning-disabilities" target="_blank" alt="This link will be opened at a new tab" title="This link will be opened at a new tab">https://www.washington.edu/doit/academic-accommodations-students-learning-disabilities</a>)<br /><br />';
                    desc += 'Eberly Center, Carnegie Mellon University. “Solve a Teaching Problem” (<a href="https://www.cmu.edu/teaching/solveproblem/index.html" target="_blank" alt="This link will be opened at a new tab" title="This link will be opened at a new tab">https://www.cmu.edu/teaching/solveproblem/index.html</a>)<br /><br />';
                    desc += 'Hillary Swetz, The Homeschool Resource Room. “Executive Functioning Checklist: Where does your child fall?”  (<a href="https://thehomeschoolresourceroom.com/2020/10/24/executive-functioning-checklist/" target="_blank" alt="This link will be opened at a new tab" title="This link will be opened at a new tab">https://thehomeschoolresourceroom.com/2020/10/24/executive-functioning-checklist/</a>)<br /><br />';
                    desc += 'MyHealth, Government of Alberta, Canada. “Psychosis” (<a href="https://myhealth.alberta.ca/Health/Pages/conditions.aspx?hwid=stp2088&" target="_blank" alt="This link will be opened at a new tab" title="This link will be opened at a new tab">https://myhealth.alberta.ca/Health/Pages/conditions.aspx?hwid=stp2088&</a>)<br /><br />';
                    desc += 'The National Autistic Society. “What is autism?” (<a href="https://www.autism.org.uk/advice-and-guidance/what-is-autism" target="_blank" alt="This link will be opened at a new tab" title="This link will be opened at a new tab">https://www.autism.org.uk/advice-and-guidance/what-is-autism</a>)<br /><br />';
                    desc += 'Reading Horizons. “Dyslexia Symptoms” (<a href="https://athome.readinghorizons.com/dyslexia-symptoms-and-signs-diagnosing-dyslexia" target="_blank" alt="This link will be opened at a new tab" title="This link will be opened at a new tab">https://athome.readinghorizons.com/dyslexia-symptoms-and-signs-diagnosing-dyslexia</a>)<br /><br />';
                    desc += 'University Counselling Service, The University of Nottingham. “Identifying and responding to students in difficulty : A guide for staff” (<a href="https://www.nottingham.ac.uk/counselling/documents/identifying-and-responding-to-students-in-difficulty.pdf" target="_blank" alt="This link will be opened at a new tab" title="This link will be opened at a new tab">https://www.nottingham.ac.uk/counselling/documents/identifying-and-responding-to-students-in-difficulty.pdf</a>)<br /><br />';
                    desc += '</p>';
                    desc += '<p lang="zh">';
                    desc += 'Age UK. “Depression and anxiety” (<a href="https://www.ageuk.org.uk/information-advice/health-wellbeing/conditions-illnesses/depression-anxiety/" target="_blank" alt="此鏈接將在新標籤頁打開" title="此鏈接將在新標籤頁打開">https://www.ageuk.org.uk/information-advice/health-wellbeing/conditions-illnesses/depression-anxiety/</a>)<br /><br />';
                    desc += 'DO-IT, University of Washington. “Academic Accommodations for Students with Learning Disabilities” (<a href="https://www.washington.edu/doit/academic-accommodations-students-learning-disabilities" target="_blank" alt="此鏈接將在新標籤頁打開" title="此鏈接將在新標籤頁打開">https://www.washington.edu/doit/academic-accommodations-students-learning-disabilities</a>)<br /><br />';
                    desc += 'Eberly Center, Carnegie Mellon University. “Solve a Teaching Problem” (<a href="https://www.cmu.edu/teaching/solveproblem/index.html" target="_blank" alt="此鏈接將在新標籤頁打開" title="此鏈接將在新標籤頁打開">https://www.cmu.edu/teaching/solveproblem/index.html</a>)<br /><br />';
                    desc += 'Hillary Swetz, The Homeschool Resource Room. “Executive Functioning Checklist: Where does your child fall?”  (<a href="https://thehomeschoolresourceroom.com/2020/10/24/executive-functioning-checklist/" target="_blank" alt="此鏈接將在新標籤頁打開" title="此鏈接將在新標籤頁打開">https://thehomeschoolresourceroom.com/2020/10/24/executive-functioning-checklist/</a>)<br /><br />';
                    desc += 'MyHealth, Government of Alberta, Canada. “Psychosis” (<a href="https://myhealth.alberta.ca/Health/Pages/conditions.aspx?hwid=stp2088&" target="_blank" alt="此鏈接將在新標籤頁打開" title="此鏈接將在新標籤頁打開">https://myhealth.alberta.ca/Health/Pages/conditions.aspx?hwid=stp2088&</a>)<br /><br />';
                    desc += 'The National Autistic Society. “What is autism?” (<a href="https://www.autism.org.uk/advice-and-guidance/what-is-autism" target="_blank" alt="此鏈接將在新標籤頁打開" title="此鏈接將在新標籤頁打開">https://www.autism.org.uk/advice-and-guidance/what-is-autism</a>)<br /><br />';
                    desc += 'Reading Horizons. “Dyslexia Symptoms” (<a href="https://athome.readinghorizons.com/dyslexia-symptoms-and-signs-diagnosing-dyslexia" target="_blank" alt="此鏈接將在新標籤頁打開" title="此鏈接將在新標籤頁打開">https://athome.readinghorizons.com/dyslexia-symptoms-and-signs-diagnosing-dyslexia</a>)<br /><br />';
                    desc += 'University Counselling Service, The University of Nottingham. “Identifying and responding to students in difficulty : A guide for staff” (<a href="https://www.nottingham.ac.uk/counselling/documents/identifying-and-responding-to-students-in-difficulty.pdf" target="_blank" alt="此鏈接將在新標籤頁打開" title="此鏈接將在新標籤頁打開">https://www.nottingham.ac.uk/counselling/documents/identifying-and-responding-to-students-in-difficulty.pdf</a>)<br /><br />';
                    desc += '</p>';
                    desc += '<p lang="cn">';
                    desc += 'Age UK. “Depression and anxiety” (<a href="https://www.ageuk.org.uk/information-advice/health-wellbeing/conditions-illnesses/depression-anxiety/" target="_blank" alt="此链接将在新标签页打开" title="此链接将在新标签页打开">https://www.ageuk.org.uk/information-advice/health-wellbeing/conditions-illnesses/depression-anxiety/</a>)<br /><br />';
                    desc += 'DO-IT, University of Washington. “Academic Accommodations for Students with Learning Disabilities” (<a href="https://www.washington.edu/doit/academic-accommodations-students-learning-disabilities" target="_blank" alt="此链接将在新标签页打开" title="此链接将在新标签页打开">https://www.washington.edu/doit/academic-accommodations-students-learning-disabilities</a>)<br /><br />';
                    desc += 'Eberly Center, Carnegie Mellon University. “Solve a Teaching Problem” (<a href="https://www.cmu.edu/teaching/solveproblem/index.html" target="_blank" alt="此链接将在新标签页打开" title="此链接将在新标签页打开">https://www.cmu.edu/teaching/solveproblem/index.html</a>)<br /><br />';
                    desc += 'Hillary Swetz, The Homeschool Resource Room. “Executive Functioning Checklist: Where does your child fall?”  (<a href="https://thehomeschoolresourceroom.com/2020/10/24/executive-functioning-checklist/" target="_blank" alt="此链接将在新标签页打开" title="此链接将在新标签页打开">https://thehomeschoolresourceroom.com/2020/10/24/executive-functioning-checklist/</a>)<br /><br />';
                    desc += 'MyHealth, Government of Alberta, Canada. “Psychosis” (<a href="https://myhealth.alberta.ca/Health/Pages/conditions.aspx?hwid=stp2088&" target="_blank" alt="此链接将在新标签页打开" title="此链接将在新标签页打开">https://myhealth.alberta.ca/Health/Pages/conditions.aspx?hwid=stp2088&</a>)<br /><br />';
                    desc += 'The National Autistic Society. “What is autism?” (<a href="https://www.autism.org.uk/advice-and-guidance/what-is-autism" target="_blank" alt="此链接将在新标签页打开" title="此链接将在新标签页打开">https://www.autism.org.uk/advice-and-guidance/what-is-autism</a>)<br /><br />';
                    desc += 'Reading Horizons. “Dyslexia Symptoms” (<a href="https://athome.readinghorizons.com/dyslexia-symptoms-and-signs-diagnosing-dyslexia" target="_blank" alt="此链接将在新标签页打开" title="此链接将在新标签页打开">https://athome.readinghorizons.com/dyslexia-symptoms-and-signs-diagnosing-dyslexia</a>)<br /><br />';
                    desc += 'University Counselling Service, The University of Nottingham. “Identifying and responding to students in difficulty : A guide for staff” (<a href="https://www.nottingham.ac.uk/counselling/documents/identifying-and-responding-to-students-in-difficulty.pdf" target="_blank" alt="此链接将在新标签页打开" title="此链接将在新标签页打开">https://www.nottingham.ac.uk/counselling/documents/identifying-and-responding-to-students-in-difficulty.pdf</a>)<br /><br />';
                    desc += '</p>';
                    desc += '<hr class="no-print" /><br/>'

                    desc += '<p style="text-align:right;" class="no-print">';
                    desc += '<a href="/f/upload/85641/lu_index.html"><button class="gradientBtn animated wow fadeInUp delay-0-3s"><font lang="en">Return To Home</font><font lang="zh">返回主頁</font><font lang="cn">返回主页</font></button></a>';
                    desc += '<a href="lu_quiz.html" style="margin-left:20px;"><button class="gradientBtn animated wow fadeInUp delay-0-3s"><font lang="en">Restart</font><font lang="zh">重做</font><font lang="cn">重做</font></button></a>';
                    desc += '<a href="javascription:void(0);" onclick="window.print();return false;" style="margin-left:20px;"><button class="gradientBtn animated wow fadeInUp delay-0-3s"><font lang="en">Print Result</font><font lang="zh">列印結果</font><font lang="cn">列印结果</font></button></a>';
                    desc += '<br /><br /><br /><br /></p>';

                    $('.time-info').html('<font lang="en">Generated at </font><font lang="zh">結果產生於：</font><font lang="cn">结果产生于：</font>'+new Date());
                    $('.desc').html(desc).show();
                    currentStep++;
                }else{
                    $('.questions-table-wrapper').hide();
                    $('.questions-table-wrapper-'+currentQuestionnaire).show();
                    currentQuestionnaire++;
                }
            }
            console.log("currentStep="+currentStep);
            console.log("totalSteps="+totalSteps);
            updateProgress();

            if(currentStep>1){
                $('.btn-prev-step').show();
            }
            if(currentStep==3){
                $('.btn-next-step').hide();
                $('.btn-prev-step').hide();
            }
            
            history.pushState(null, '', '');
            currentHistory.push('./quiz.html#currentStep'+currentStep);
        }, 100);
    };
    $.fn.checking = function (qstn, ck) {
        var ans = q[questionNo].A;
        if (ck != ans)
            return false;
        else
            return true;
    };
    
    var getProblemTitles = (l) => {
        let selected = [];
        for(let i in questionAnswer["1"]){
            if(i*1==21) selected.push("2a");
            else if(i*1==22) selected.push("2b");
            else if(i*1==23) selected.push("2c");
            else if(i*1==24) selected.push("2d");
            else if(i*1==31) selected.push("3a");
            else if(i*1==32) selected.push("3b");
            else if(i*1==33) selected.push("3c");
            else if(i*1==34) selected.push("3d");
            else selected.push(i);
        }
        selected = selected.sort();
        let titles = [];
        for(let i in selected){
            let index = selected[i];
            if(isset(problem[index])){
                titles.push('('+(i*1+1)+') '+problem[index]['title_'+l]);
            }
        }
        return titles.join(", ");
    };

    var getProblemTitle = (l) => {
        problemIndex = questionAnswer["1"];
        if(isset(questionAnswer["1.5"])){
            switch(questionAnswer["1.5"]){
                case "1":
                    problemIndex += "a";
                    break;
                case "2":
                    problemIndex += "b";
                    break;
                case "3":
                    problemIndex += "c";
                    break;
                case "4":
                    problemIndex += "d";
                    break;
            }
        }
        return isset(problem[problemIndex]) ? problem[problemIndex]['title_'+l] : "";
    };

    var getProblemTitleByIndex = (l, index) => {
        return isset(problem[index]) ? problem[index]['title_'+l] : "";
    };
    function chartMake() {
        var chart = AmCharts.makeChart("chartdiv",
                {
                    "type": "serial",
                    "theme": "dark",
                    "dataProvider": [{
                            "name": "Correct",
                            "points": correctCount,
                            "color": "#00FF00",
                            "bullet": "http://i2.wp.com/img2.wikia.nocookie.net/__cb20131006005440/strategy-empires/images/8/8e/Check_mark_green.png?w=250"
                        }, {
                            "name": "Incorrect",
                            "points": q.length - correctCount,
                            "color": "red",
                            "bullet": "http://4vector.com/i/free-vector-x-wrong-cross-no-clip-art_103115_X_Wrong_Cross_No_clip_art_medium.png"
                        }],
                    "valueAxes": [{
                            "maximum": q.length,
                            "minimum": 0,
                            "axisAlpha": 0,
                            "dashLength": 4,
                            "position": "left"
                        }],
                    "startDuration": 1,
                    "graphs": [{
                            "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
                            "bulletOffset": 10,
                            "bulletSize": 52,
                            "colorField": "color",
                            "cornerRadiusTop": 8,
                            "customBulletField": "bullet",
                            "fillAlphas": 0.8,
                            "lineAlpha": 0,
                            "type": "column",
                            "valueField": "points"
                        }],
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0,
                    "autoMargins": false,
                    "categoryField": "name",
                    "categoryAxis": {
                        "axisAlpha": 0,
                        "gridAlpha": 0,
                        "inside": true,
                        "tickLength": 0
                    }
                });
    }


    var getQns = () => {
        let selected = [];
        for(let i in questionAnswer["1"]){
            if(i*1==21) selected.push("2a");
            else if(i*1==22) selected.push("2b");
            else if(i*1==23) selected.push("2c");
            else if(i*1==24) selected.push("2d");
            else if(i*1==31) selected.push("3a");
            else if(i*1==32) selected.push("3b");
            else if(i*1==33) selected.push("3c");
            else if(i*1==34) selected.push("3d");
            else selected.push(i);
        }
        selected = selected.sort();
        let qns = [];
        for(let i in selected){
            let index = selected[i];
            if(isset(problem[index])){
                qns = qns.concat(problem[index]['questionnaire'].split(",").map(function(item) {
                    return parseInt(item, 10);
                }));
            }
        }
        qns = qns.filter((item, index) => qns.indexOf(item) === index);
        // qns = qns.sort(function(a, b) {
        //     return a - b;
        // });
        return qns;
    };


    var getQnsByIndex = (index) => {
        let qns = [];
        if(isset(problem[index])){
            qns = qns.concat(problem[index]['questionnaire'].split(",").map(function(item) {
                return parseInt(item, 10);
            }));
        }
        return qns;
    };
});


var close_popup = (ref) => {
    $('.quiz-'+ref).hide();
};